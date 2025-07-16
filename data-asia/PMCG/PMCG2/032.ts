import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Marowak",
         ja: "マロワク",
         fr: "Marowak",
         de: "Marowak",
         es: "Marowak",
         it: "Marowak",
         pt: "Marowak",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [105],
      hp: 60,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting", "Fighting"],
          name: {
            en: "Bonemerang",
            ja: "ボネメラン",
            fr: "Bonmerang",
            de: "Bonemerang",
            es: "Bonemerang",
            it: "Bonemerang",
            pt: "Beão",
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
          damage: None,
        },
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            en: "Call for Friend",
            ja: "友達を呼びます",
            fr: "Appeler un ami",
            de: "Rufen Sie nach Freund",
            es: "Llamar a un amigo",
            it: "Chiama per un amico",
            pt: "Ligue para o amigo",
          },
          effect: {
            en: "Search your deck for a Fighting Basic Pokemon card and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
            ja: "基本的なポケモンカードをファイティングで検索し、ベンチに置きます。その後、デッキをシャッフルします。 （ベンチがいっぱいの場合、この攻撃を使用できません。）",
            fr: "Recherchez votre deck pour une carte Pokémon de base de combat et mettez-la sur votre banc. Mélanger votre deck par la suite. (Vous ne pouvez pas utiliser cette attaque si votre banc est plein.)",
            de: "Suchen Sie Ihr Deck nach einer kämpfenden Basic -Pokemon -Karte und legen Sie sie auf Ihre Bank. Mischen Sie anschließend Ihr Deck. (Sie können diesen Angriff nicht verwenden, wenn Ihre Bank voll ist.)",
            es: "Busque en su mazo una carta de Pokémon básica de lucha y póngala en su banco. Baraja tu mazo después. (No puedes usar este ataque si tu banco está lleno).",
            it: "Cerca nel tuo mazzo una carta Pokemon di base che combatte e mettila in panchina. Shuffle il tuo mazzo in seguito. (Non puoi usare questo attacco se la tua panchina è piena.)",
            pt: "Procure seu baralho por um cartão de Pokémon básico de luta e coloque -o em seu banco. Afaste seu baralho depois. (Você não pode usar este ataque se o seu banco estiver cheio.)",
          },
          damage: None,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
