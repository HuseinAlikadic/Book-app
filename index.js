new Vue({
  el: "#book",
  data() {
    return {
      book_array: [
        {
          id: 1,
          author_by_id: 1,
          title_id: 1,
          img_of_book: "./img-of-book/book1.jfif",
          text:
            "As Jenny Lawson’s hundreds of thousands of fans know, she suffers from depression. In Broken, Jenny brings readers along on her mental and physical health journey, offering heartbreaking and hilarious anecdotes along the way.",

          comments: [
            {
              id: 1,
              user_comment_id: 3,
              text_comment:
                "A firsthand exploration of the cost of boarding the bus of change to move America forward--written by one of the Civil Rights Movement's pioneers. At 18, Charles Person was the youngest of the original Freedom Riders, key figures in the U.S. Civil Rights Movement who left Washington, D.C. by bus i",
            },
          ],
        },
        {
          id: 2,
          author_by_id: 2,
          title_id: 2,
          img_of_book: "./img-of-book/book2.jfif",
          text:
            " Publishers Weekly Biblical womanhood--the belief that God designed women to be submissive wives, virtuous mothers, and joyful homemakers--pervades North American Christianity.",

          comments: [
            {
              id: 1,
              user_comment_id: 1,
              text_comment:
                "No matter what the topic is, every chapter in this book is about various aspects of depression and mental health. What makes it different than most books on this topic it is absolutely HILARIOUS!!!",
            },
          ],
        },
        {
          id: 3,
          author_by_id: 3,
          title_id: 3,
          img_of_book: "./img-of-book/book3.jfif",
          text:
            "Pulitzer Prize-winning playwright Quiara Alegría Hudes tells her lyrical story of coming of age against the backdrop of an ailing Philadelphia barrio, with her sprawling idiosyncratic",

          comments: [
            {
              id: 1,
              user_comment_id: 4,
              text_comment:
                "In the nearly ninety years since Irma S. Rombauer self-published the first three thousand copies of Joy of Cooking in 1931, it has become the kitchen bible, with more than 20 million copies in print.",
            },
          ],
        },
        {
          id: 4,
          author_by_id: 4,
          title_id: 4,
          img_of_book: "./img-of-book/book4.jfif",
          text:
            "The wonderfully original author of Everyone's a Aliebn When Ur a Aliebn Too gives us a collection of touching and hilarious personal essays, stories, poems—accompanied by his trademark illustrations—covering topics such as mental health, ha",

          comments: [
            {
              id: 1,
              user_comment_id: 2,
              text_comment:
                "Merriam-Webster Collegiate Dictionary Book With Jacket contains 225,000 clear and precise definitions along with 10,000 new words as well as more than 40,000 example ",
            },
          ],
        },
      ],
      autor_or_user_array: [
        {
          id: 1,
          name: "Husein",
          password: 12345,
          email: "amar@",
          img_of_user: "./img-of-user/amar.jfif ",
        },
        {
          id: 2,
          name: "Emina",
          password: 12345,
          email: "emina@",
          img_of_user: " ./img-of-user/dina.jfif",
        },
        {
          id: 3,
          name: "Kazafer",
          password: 12345,
          email: "kazafer@",
          img_of_user: "./img-of-user/mahir.jfif ",
        },
        {
          id: 4,
          name: "Fadila",
          password: 12345,
          email: "fadila@",
          img_of_user: " ./img-of-user/suno.jfif",
        },
      ],
      title_array: [
        { id: 1, title: "The Elements of Style" },
        { id: 2, title: "On Writing: A Memoir of the Craft" },
        { id: 3, title: "MLA Handbook for Writers of Research Papers" },
        {
          id: 4,
          title: "On Writing Well: The Classic Guide to Writing Nonfiction",
        },
      ],

      show_data_array: [],
      page_views: false,
      author_user_name: "",
      author_user_email: "",
      author_user_password: "",
      join_in_message_validation: false,
      log_in_array: [],
      log_in_email: "",
      log_in_password: "",
      log_in_message_for_incorect_data: false,
      comment_text_visible: "no",
      comment_area_visible: "no",
      text_area_comment: "",
      comments_array: [],
    };
  },
  mounted() {
    this.show_the_message();
  },

  methods: {
    show_the_message() {
      this.show_data_array = [];
      this.show_the_information = true;
      this.book_array.forEach((item) => {
        let find_author_index = this.autor_or_user_array.findIndex(
          (a) => a.id == item.author_by_id
        );

        let author_name = this.autor_or_user_array[find_author_index].name;

        let title_index = this.title_array.findIndex(
          (b) => b.id == item.title_id
        );
        let title_of_book = this.title_array[title_index].title;
        //pretrazujem nested array
        let show_comments_array = [];
        item.comments.forEach((comments_parameter) => {
          let user_commented_index = this.autor_or_user_array.findIndex(
            (c) => c.id == comments_parameter.user_comment_id
          );
          let user_comented = this.autor_or_user_array[user_commented_index]
            .name;

          let img_user_comented = this.autor_or_user_array[user_commented_index]
            .img_of_user;
          show_comments_array.push({
            id_of_comments: comments_parameter.id,
            user_name: user_comented,
            comment_tetxt: comments_parameter.text_comment,
            img_commented: img_user_comented,
          });
        });

        this.show_data_array.push({
          name_of_author: author_name,
          img: item.img_of_book,
          text_of_description: item.text,
          title: title_of_book,
          comments_array: show_comments_array,
        });
      });
    },
    add_user_in_array_of_users() {
      let max_id = Math.max.apply(
        Math,
        this.autor_or_user_array.map(function (o) {
          return o.id;
        })
      );
      let random_img_index = this.autor_or_user_array[
        Math.floor(Math.random() * this.autor_or_user_array.length)
      ];
      let random_img = random_img_index.img_of_user;

      if (
        this.author_user_name == "" ||
        this.author_user_password == "" ||
        this.author_user_email == ""
      ) {
        this.join_in_message_validation = true;
      } else {
        this.autor_or_user_array.push({
          id: max_id + 1,
          name: this.author_user_name,
          password: this.author_user_password,
          email: this.author_user_email,
          img_of_user: random_img,
        });
        this.page_views = true;
        $("#add-user-in-author-array").modal("hide");
        // riješiti da je Join disable kada se jednom joinam i OBRISATI INPUTE
      }
    },
    log_in() {
      this.log_in_array = [];
      let user_found = false;
      this.autor_or_user_array.forEach((item) => {
        if (
          this.log_in_email == item.email &&
          this.log_in_password == item.password
        ) {
          user_found = true;
          this.log_in_array.push({
            log_in_id: item.id,
            log_in_name: item.name,
            log_in_password: item.password,
            log_in_email: item.email,
            log_in_img: item.img_of_user,
          });
        }
      });
      if (user_found == true) {
        this.page_views = true;
        this.log_in_message_for_incorect_data = false;
      } else {
        this.log_in_message_for_incorect_data = true;
      }
      (this.log_in_email = ""), (this.log_in_password = "");
    },
    show_comments(h) {
      this.comment_text_visible = h;
      this.comment_area_visible = "no";
    },
    show_comment_area(h) {
      this.comment_area_visible = h;
    },
    new_cooment_of_user(h) {
      let array = this.book_array[h].comments;
      let max_id = Math.max.apply(
        Math,
        array.map(function (o) {
          return o.id;
        })
      );
      let user_id = this.log_in_array[0].log_in_id;
      array.push({
        id: max_id + 1,
        user_comment_id: user_id,
        text_comment: this.text_area_comment,
      });
      (this.text_area_comment = ""), (this.comment_area_visible = "no");
      this.show_the_message();
    },
  },
});
