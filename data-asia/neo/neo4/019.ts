import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Light Flareon",
         ja: "軽いフレアロン",
         fr: "Flareon léger",
         de: "Leichtes Flareon",
         es: "Ligero Flareón",
         it: "Light Flareon",
         pt: "Flareon leve",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [136],
      hp: 80,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fire"],
          name: {
            en: "Warm Up",
            ja: "準備し始める",
            fr: "Réchauffer",
            de: "Sich warm laufen",
            es: "Calentamiento",
            it: "Riscaldamento",
            pt: "Aquecimento",
          },
          effect: {
            en: "If you have any benched Pokemon, search your deck for a Fire Energy card and attach it to 1 of them. Then shuffle your deck.",
            ja: "ベンチ付きポケモンがある場合は、デッキをファイアエネルギーカードに検索し、1つに取り付けます。次に、デッキをシャッフルします。",
            fr: "Si vous avez un Pokémon banc, recherchez votre pont pour une carte d'énergie de feu et fixez-la à 1 d'entre elles. Puis mélanger votre deck.",
            de: "Wenn Sie ein Bank -Pokemon haben, suchen Sie Ihr Deck nach einer Feuerergiekarte und befestigen Sie es an 1 davon. Dann mischen Sie Ihr Deck.",
            es: "Si tiene algún Pokémon de banca, busque en su mazo una tarjeta de energía de fuego y adhiérase a 1 de ellos. Entonces baraja tu mazo.",
            it: "Se hai dei Pokemon in panchina, cerca nel tuo mazzo una carta di energia antincendio e attaccalo a 1 di essi. Quindi mescola il tuo mazzo.",
            pt: "Se você tiver algum Pokémon em bancada, procure seu baralho em busca de um cartão de energia de incêndio e anexe -o a 1 deles. Então embaralhe seu baralho.",
          },
        },
        {
          cost: ["Fire", "Fire", "Colorless"],
          name: {
            en: "Burning Flame",
            ja: "燃えている炎",
            fr: "Flamme brûlante",
            de: "Brennen Flamme",
            es: "Llama ardiente",
            it: "Fiamma brucia",
            pt: "Chama ardente",
          },
          effect: {
            en: "Flip 2 coins. For each heads, discard a Fire Energy card attached to Light Flareon or this attack does nothing. This attack does 30 damage plus 20 damage for each heads.",
            ja: "2つのコインをフリップします。それぞれの頭について、軽いフレレオンに取り付けられた火災エネルギーカードを捨てるか、この攻撃は何もしません。この攻撃は、30のダメージとヘッドごとに20のダメージを与えます。",
            fr: "Flip 2 pièces. Pour chaque tête, jetez une carte d'énergie de feu attachée à Light Flareon ou cette attaque ne fait rien. Cette attaque fait 30 dégâts plus 20 dégâts pour chaque tête.",
            de: "2 Münzen umdrehen. Für jeden Köpfe entsorgen Sie eine an leichten Flareon befestigte Brandenergiekarte, oder dieser Angriff tut nichts. Dieser Angriff verursacht 30 Schäden plus 20 Schäden für jeden Köpfe.",
            es: "Flip 2 monedas. Para cada cabezal, deseche una tarjeta de energía de fuego unida a Light Flareon o este ataque no hace nada. Este ataque hace 30 daños más 20 de daño para cada cabezal.",
            it: "Flip 2 monete. Per ogni teste, scartare una carta di energia antincendio attaccata alla luce Flareon o questo attacco non fa nulla. Questo attacco infligge 30 danni più 20 danni per ogni teste.",
            pt: "Flip 2 moedas. Para cada cabeças, descarte um cartão de energia de incêndio preso a flareon leve ou esse ataque não faz nada. Este ataque causa 30 danos mais 20 danos para cada cabeça.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
