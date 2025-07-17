import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Houndoom - 069/088",
         ja: "猟犬-069/088",
         fr: "Houndoom - 069/088",
         de: "Houndoom - 069/088",
         es: "HOUDOOM - 069/088",
         it: "Houndaom - 069/088",
         pt: "Houndoom - 069/088",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [229],
      hp: 70,
      types: ["Darkness"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Ambush",
            ja: "待ち伏せ",
            fr: "Embuscade",
            de: "Hinterhalt",
            es: "Emboscada",
            it: "Agguato",
            pt: "Emboscada",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 20 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 10 Schäden plus 20 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 20 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni più 20 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 20 mais danos.",
          },
        },
        {
          cost: ["Darkness", "Colorless", "Colorless"],
          name: {
            en: "Lonely Fang",
            ja: "孤独な牙",
            fr: "Fang solitaire",
            de: "Einsamer Fang",
            es: "Colmillo solitario",
            it: "Fang solitario",
            pt: "Fang solitário",
          },
          effect: {
            en: "This attack does 30 damage plus 20 more damage times the number of your opponent's Benched Pokemon minus the number of your Benched Pokemon. (For example, if your opponent has 3 Benched Pokemon and you have 1, this attack will do 30 damage plus 40 more damage.)",
            ja: "この攻撃は、30のダメージに加えて、対戦相手のベンチポケモンの数を20回以上ダメージし、ベンチポケモンの数を差し引いています。 （たとえば、相手が3つのベンチポケモンを持っていて、1つのベンチがある場合、この攻撃は30のダメージと40ダメージを与えます。）",
            fr: "Cette attaque fait 30 dégâts plus 20 dégâts de plus du nombre de pokemon bancés de votre adversaire moins le nombre de votre pokemon bancé. (Par exemple, si votre adversaire a 3 Pokémon bancés et que vous en avez 1, cette attaque fera 30 dégâts plus 40 dégâts de plus.)",
            de: "Dieser Angriff verursacht 30 Schäden plus 20 weitere Schadenszeiten, die Anzahl der Bankpokemon Ihres Gegners abzüglich der Anzahl Ihres Bankpokémons. (Wenn Ihr Gegner beispielsweise 3 Pokémon mit einem Bank mit einem Bank hat und Sie 1 haben, wird dieser Angriff 30 Schaden zuzüglich 40 mehr Schaden verursachen.)",
            es: "Este ataque hace 30 daños más 20 veces más de daño, el número de Pokémon de banca de tu oponente menos el número de tu Pokémon de banca. (Por ejemplo, si tu oponente tiene 3 Pokémon en banca y tienes 1, este ataque hará 30 daños más 40 daños más).",
            it: "Questo attacco infligge 30 danni più 20 volte in più il numero del Pokemon in panchina del tuo avversario meno il numero del tuo Pokemon in panchina. (Ad esempio, se il tuo avversario ha 3 Pokemon in panchina e ne hai 1, questo attacco farà 30 danni più 40 altri danni.)",
            pt: "Este ataque causa 30 danos mais 20 mais danos vezes o número do Pokémon em bancada do seu oponente menos o número de seu Pokémon em banco. (Por exemplo, se o seu oponente tiver 3 Pokemon em bancos e você tiver 1, esse ataque causará 30 danos mais 40 mais danos.)",
          },
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
