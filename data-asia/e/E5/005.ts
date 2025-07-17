import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Beedrill - 005/088",
         ja: "Beedrill -005/088",
         fr: "Beedrill - 005/088",
         de: "Beedrill - 005/088",
         es: "Beedrill - 005/088",
         it: "Beedrill - 005/088",
         pt: "Beedrill - 005/088",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [15],
      hp: 80,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Venom Spray",
            ja: "毒スプレー",
            fr: "Vapeur de venin",
            de: "Giftspray",
            es: "Spray de veneno",
            it: "Spray veleno",
            pt: "Spray de veneno",
          },
          effect: {
            en: "When you play Beedrill from your hand to evolve your Active Pokmon, the Defending Pokmon is now Paralyzed and Poisoned.",
            ja: "アクティブなポケモンを進化させるために手からbeedrillを演奏すると、防御するポケモンは麻痺し、毒されます。",
            fr: "Lorsque vous jouez à Beedrill de votre main pour faire évoluer votre Pokémon actif, le Pokémon en défense est maintenant paralysé et empoisonné.",
            de: "Wenn Sie Beedrill von Ihrer Hand spielen, um Ihr aktives Pokémon zu entwickeln, ist das verteidigende Pokémon jetzt gelähmt und vergiftet.",
            es: "Cuando juegas Beedrill de tu mano para evolucionar tu Pokémon activo, el Pokémon defensor ahora está paralizado y envenenado.",
            it: "Quando suoni Beedrill dalla tua mano per evolvere il tuo Pokemon attivo, il Pokemon in carica è ora paralizzato e avvelenato.",
            pt: "Quando você toca Beedrill da sua mão para evoluir seu Pokémon ativo, o Pokémon atual agora está paralisado e envenenado.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Needle Rush",
            ja: "針ラッシュ",
            fr: "Ruée vers l'aiguille",
            de: "Nadelsturm",
            es: "Aguja",
            it: "Ago fretta",
            pt: "Rush de agulha",
          },
          effect: {
            en: "Flip 4 coins. If you get 1 heads, this attack does 10 damage plus 10 more damage. If you get 2 heads, this attack does 10 damage plus 20 more damage. If you get 3 heads, this attack does 10 damage plus 50 more damage. If you get 4 heads, this attack does 10 damage plus 90 more damage.",
            ja: "4コインをひっくり返します。 1ヘッドを獲得した場合、この攻撃は10ダメージに加えて10ダメージを与えます。 2つのヘッドを獲得した場合、この攻撃は10ダメージに加えて20ダメージを与えます。 3ヘッドを獲得した場合、この攻撃は10ダメージに加えて50ダメージを与えます。 4ヘッドを獲得した場合、この攻撃は10ダメージに加えて90ダメージを与えます。",
            fr: "Flip 4 pièces. Si vous obtenez 1 têtes, cette attaque fait 10 dégâts plus 10 dégâts supplémentaires. Si vous obtenez 2 têtes, cette attaque fait 10 dégâts plus 20 dégâts supplémentaires. Si vous obtenez 3 têtes, cette attaque fait 10 dégâts plus 50 dégâts supplémentaires. Si vous obtenez 4 têtes, cette attaque fait 10 dégâts plus 90 dégâts supplémentaires.",
            de: "Flip 4 Münzen. Wenn Sie 1 Köpfe erhalten, verursacht dieser Angriff 10 Schaden zuzüglich 10 weiterer Schaden. Wenn Sie 2 Köpfe erhalten, verursacht dieser Angriff 10 Schaden sowie 20 weitere Schäden. Wenn Sie 3 Köpfe erhalten, verursacht dieser Angriff 10 Schaden zuzüglich 50 weitere Schäden. Wenn Sie 4 Köpfe erhalten, verursacht dieser Angriff 10 Schaden zuzüglich 90 weitere Schäden.",
            es: "Flip 4 monedas. Si obtienes 1 cabezas, este ataque hace 10 daños más 10 daños más. Si obtienes 2 cabezas, este ataque hace 10 daños más 20 más de daño. Si obtienes 3 cabezas, este ataque hace 10 daños más 50 más de daño. Si obtienes 4 cabezas, este ataque hace 10 daños más 90 más de daño.",
            it: "Flip 4 monete. Se ottieni 1 teste, questo attacco infligge 10 danni più 10 danni in più. Se ottieni 2 teste, questo attacco infligge 10 danni più 20 danni in più. Se ottieni 3 teste, questo attacco infligge 10 danni più 50 danni in più. Se ottieni 4 teste, questo attacco infligge 10 danni più 90 danni in più.",
            pt: "Flip 4 moedas. Se você receber 1 cabeças, esse ataque causará 10 danos mais 10 danos. Se você receber 2 cabeças, esse ataque causará 10 danos mais 20 mais danos. Se você receber 3 cabeças, esse ataque causará 10 danos mais 50 mais danos. Se você receber 4 cabeças, esse ataque causará 10 danos mais 90 mais danos.",
          },
        },
      ],


      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
