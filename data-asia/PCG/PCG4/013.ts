import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Flareon",
         ja: "フレアロン",
         fr: "Flareon",
         de: "Flareon",
         es: "Escaparrón",
         it: "Flareon",
         pt: "Flareon",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [136],
      hp: 70,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fire"],
          name: {
            en: "Fire Dance",
            ja: "ファイアダンス",
            fr: "Danse du feu",
            de: "Feuertanz",
            es: "Baile de fuego",
            it: "Danza del fuoco",
            pt: "Dance de fogo",
          },
          effect: {
            en: "Search your discard pile for a Fire Energy card and attach it to 1 of your Pokemon.",
            ja: "廃棄の山を検索して、ファイアエネルギーカードを使用して、1枚のポケモンに取り付けます。",
            fr: "Recherchez votre tas de défausse pour une carte d'énergie de feu et attachez-la à 1 de votre Pokémon.",
            de: "Suchen Sie Ihren Abwurfstapel nach einer Feuerergiekarte und befestigen Sie sie an 1 Ihres Pokémon.",
            es: "Busque en su pila de descarte una tarjeta de energía de fuego y adjunte a 1 de su Pokémon.",
            it: "Cerca il tuo mucchio di scarti per una carta di energia antincendio e attaccalo a 1 del tuo Pokemon.",
            pt: "Pesquise sua pilha de descarte para obter um cartão de energia de incêndio e anexe -o a 1 do seu Pokémon.",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Multi Burn",
            ja: "マルチバーン",
            fr: "Multiples brûler",
            de: "Multi Burn",
            es: "Múltiples quemaduras",
            it: "Multi Burn",
            pt: "Multi Burn",
          },
          effect: {
            en: "If Flareon has 3 or more different types of basic Energy cards attached to it, this attack does 40 damage plus 20 more damage and the Defending Pokemon is now Burned.",
            ja: "Flareonに3つ以上の異なるタイプの基本エネルギーカードが付属している場合、この攻撃は40ダメージに20ダメージを与え、防御ポケモンが燃やされます。",
            fr: "Si Flareon a 3 types ou plus de cartes d'énergie de base qui y sont fixées, cette attaque fait 40 dégâts plus 20 dégâts supplémentaires et le Pokémon en défense est maintenant brûlé.",
            de: "Wenn Flareon 3 oder mehr verschiedene Arten von grundlegenden Energiekarten befindet, enthält dieser Angriff 40 Schaden zuzüglich 20 mehr Schäden und das verteidigende Pokémon wird jetzt verbrannt.",
            es: "Si Flareon tiene 3 o más tipos diferentes de cartas de energía básicas unidas, este ataque hace 40 daños más 20 daños más y el Pokémon defensor ahora se quema.",
            it: "Se Flareon ha 3 o più tipi diversi di carte di energia di base collegate ad esso, questo attacco fa 40 danni più 20 danni in più e il Pokemon in carica viene ora bruciato.",
            pt: "Se Flareon tiver 3 ou mais tipos diferentes de cartões básicos de energia anexados, esse ataque causará 40 danos mais 20 mais danos e o Pokémon defensor agora está queimado.",
          },
        },
      ],

      retreat: 1,

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
