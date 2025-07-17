import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Articuno - 031/088",
         ja: "Articuno -031/088",
         fr: "Articuno - 031/088",
         de: "Articuno - 031/088",
         es: "Articuno - 031/088",
         it: "Articuno - 031/088",
         pt: "Articuno - 031/088",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [144],
      hp: 80,
      types: ["Water"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Water Immunity",
            ja: "水免疫",
            fr: "Immunité dans l'eau",
            de: "Wasserimmunität",
            es: "Inmunidad al agua",
            it: "Immunità dell'acqua",
            pt: "Imunidade à água",
          },
          effect: {
            en: "You can't attach Water Energy cards from your hand to Articuno.",
            ja: "手からarticunoに水エネルギーカードを取り付けることはできません。",
            fr: "Vous ne pouvez pas attacher des cartes d'énergie de l'eau de votre main à Aticuno.",
            de: "Sie können keine Wasserergiekarten von Ihrer Hand an Articuno befestigen.",
            es: "No puede adjuntar tarjetas de energía de agua de su mano a Articuno.",
            it: "Non puoi attaccare le carte energetiche dell'acqua dalla tua mano a Articuno.",
            pt: "Você não pode anexar cartões de energia da água da sua mão a Articuno.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Freeze Solid",
            ja: "固体を凍結します",
            fr: "Congeler",
            de: "Solid einfrieren",
            es: "Congelar sólido",
            it: "Congelamento solido",
            pt: "Congelamento sólido",
          },
          effect: {
            en: "If there are any Water Energy cards in your discard pile, flip a coin. If heads, attach 1 of them to Articuno.",
            ja: "廃棄パイルに水エネルギーカードがある場合は、コインをひっくり返します。頭の場合は、それらの1つをArticunoに取り付けます。",
            fr: "S'il y a des cartes d'énergie de l'eau dans votre tas de défausse, retournez une pièce. Si les têtes, attachez 1 d'entre elles à Articuno.",
            de: "Wenn Sie Wasserergiekarten in Ihrem Ablagerungsstapel enthalten, drehen Sie eine Münze um. Wenn Köpfe, befestigen Sie 1 von ihnen an Articuno.",
            es: "Si hay tarjetas de energía de agua en su pila de descarte, voltee una moneda. Si se dirige, adjunte 1 de ellos a Articuno.",
            it: "Se ci sono carte sull'energia idrica nella tua pila di scarto, capovolgi una moneta. Se le teste, attacca 1 a Articuno.",
            pt: "Se houver cartas de energia hídrica na sua pilha de descarte, vire uma moeda. Se as cabeças, anexe 1 deles a Articuno.",
          },
          damage: 10,
        },
        {
          cost: ["Water", "Water", "Colorless", "Colorless"],
          name: {
            en: "Ice Cyclone",
            ja: "アイスサイクロン",
            fr: "Cyclone de glace",
            de: "Eiszyklon",
            es: "Ciclón de hielo",
            it: "Ice Ciclone",
            pt: "Ciclone de gelo",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokemon. If tails, this attack does 10 damage to each of your Pokemon in play. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "コインをひっくり返します。頭の場合、この攻撃は相手のベンチポケモンのそれぞれに10ダメージを与えます。テールの場合、この攻撃は、プレイ中の各ポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Retourner une pièce. Si les têtes, cette attaque inflige 10 dégâts à chacun des pokemon bancés de votre adversaire. Si Tails, cette attaque fait 10 dégâts à chacun de vos Pokémon en jeu. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Eine Münze drehen. Wenn der Köpfe, dieser Angriff an jedem Bankpokémon Ihres Gegners Schaden zufügt. Wenn Schwänze, schädigt dieser Angriff 10 an jedem Ihrer Pokémon im Spiel. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños a cada Pokémon de banca de tu oponente. Si Tails, este ataque hace 10 daños a cada uno de tus Pokémon en juego. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni a ciascuno dei Pokemon in panchina del tuo avversario. Se le code, questo attacco infligge 10 danni a ciascuno dei tuoi Pokemon in gioco. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos a cada um dos Pokémon bancos do seu oponente. Se a cauda, esse ataque causa 10 danos a cada um dos seus Pokémon em jogo. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 50,
        },
      ],

      retreat: 2,

};
