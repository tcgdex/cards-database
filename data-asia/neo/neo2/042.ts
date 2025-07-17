import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Tyranitar",
         ja: "タイラニター",
         fr: "Tyranitar",
         de: "Tyranitar",
         es: "Tiranitar",
         it: "Tyranitar",
         pt: "Tyranitar",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [248],
      hp: 100,
      types: ["Darkness"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Slam",
            ja: "スラム",
            fr: "Claquer",
            de: "Zuschlagen",
            es: "Golpe",
            it: "Sbattere",
            pt: "Slam",
          },
          effect: {
            en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
            fr: "Flip 2 pièces. Cette attaque fait 30 dégâts de temps le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 30 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 30 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 30 danni volte al numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 30 danos vezes o número de cabeças.",
          },
        },
        {
          cost: ["Darkness", "Darkness", "Colorless", "Colorless"],
          name: {
            en: "Trample",
            ja: "トランプ",
            fr: "Bafouer",
            de: "Trampeln",
            es: "Pisotear",
            it: "Calpestare",
            pt: "Atropela",
          },
          effect: {
            en: "For each Benched Pokemon in play (yours and your opponent's), flip a coin. If heads, this attack does 30 damage to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "遊びのベンチポケモン（あなたと相手）について、コインをひっくり返します。頭の場合、この攻撃はそのポケモンに30のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Pour chaque pokemon banc de jeu (le vôtre et celui de votre adversaire), retournez une pièce. Si les têtes, cette attaque inflige 30 dégâts à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Für jedes Bankpokemon im Spiel (Ihr und Ihr Gegner) drehen Sie eine Münze. Wenn dieser Angriff dieses Pokémon 30 Schäden ansetzt. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Para cada Pokémon en juego en juego (tuyo y tu oponente), voltea una moneda. Si se dirige, este ataque hace 30 daños a ese Pokémon. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Per ogni Pokemon in panchina in gioco (il tuo e il tuo avversario), capovolgi una moneta. Se la testa, questo attacco infligge 30 danni a quel pokemon. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Para cada Pokémon em Bancado em jogo (o seu e o seu oponente), vire uma moeda. Se as cabeças, esse ataque causam 30 danos a esse Pokémon. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 50,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
        },
      ],
};
