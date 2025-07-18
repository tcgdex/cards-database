import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Parasect",
         ja: "パラセクト",
         fr: "Parasect",
         de: "Parasitekt",
         es: "Parasecto",
         it: "Paraseto",
         pt: "Parasecto",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [47],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Energy Powder",
            ja: "エネルギーパウダー",
            fr: "Poudre d'énergie",
            de: "Energiepulver",
            es: "Polvo de energía",
            it: "Polvere di energia",
            pt: "Energia em pó",
          },
          effect: {
            en: "Search your deck for up to 2 basic Energy cards and attach them to any of your Pokemon (excluding Pokemon-ex) in any way you like. Shuffle your deck afterward.",
            ja: "デッキを最大2つの基本エネルギーカードで検索し、好きな方法でポケモン（ポケモン-Exを除く）に添付してください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu jusqu'à 2 cartes d'énergie de base et attachez-les à l'un de vos Pokémon (à l'exclusion de Pokemon-Ex) de quelque manière que ce soit. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach bis zu 2 grundlegenden Energiekarten und fügen Sie es an Ihrem Pokémon (ohne Pokemon-ex) so, wie Sie möchten. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo hasta 2 tarjetas de energía básicas y adjuntelas a cualquiera de sus Pokémon (excluyendo Pokemon-EX) de cualquier manera que desee. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo per un massimo di 2 carte di energia di base e attaccali a uno qualsiasi dei tuoi Pokemon (escluso Pokemon-Ex) in ogni modo che desideri. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho por até 2 cartas básicas de energia e anexe-as a qualquer um dos seus Pokemon (excluindo Pokemon-Ex) da maneira que desejar. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Toxic Spore",
            ja: "有毒な胞子",
            fr: "Spores toxiques",
            de: "Giftige Sporen",
            es: "Espora tóxico",
            it: "Spora tossica",
            pt: "Esporo tóxico",
          },
          effect: {
            en: "The Defending Pokemon is now Poisoned.",
            ja: "防御ポケモンは現在中毒になっています。",
            fr: "Le Pokémon en défense est maintenant empoisonné.",
            de: "Das verteidigende Pokemon ist jetzt vergiftet.",
            es: "El Pokémon defensor ahora está envenenado.",
            it: "Il Pokemon in carica è ora avvelenato.",
            pt: "O Pokémon atual agora está envenenado.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
