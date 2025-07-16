import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Nidoran F",
         ja: "ニドランf",
         fr: "Nidoran f",
         de: "Nidoran f",
         es: "Nidoran F",
         it: "Nidoran f",
         pt: "Nidoran f",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [29],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Fury Swipes",
            ja: "フューリースワイプ",
            fr: "Fureur glissa",
            de: "Wut wischt",
            es: "Furia golpea",
            it: "Fury Swipes",
            pt: "Fury Swipes",
          },
          effect: {
            en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
            ja: "3コインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Flip 3 pièces. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "3 Münzen umdrehen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 3 monedas. Este ataque hace 10 veces el número de cabezas.",
            it: "Flip 3 monete. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Flip 3 moedas. Este ataque causa 10 danos ao número do número de cabeças.",
          },
          damage: None,
        },
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Call for Family",
            ja: "家族を呼びます",
            fr: "Appel à la famille",
            de: "Rufen Sie nach Familie",
            es: "Llamar a la familia",
            it: "Chiama per la famiglia",
            pt: "Ligue para a família",
          },
          effect: {
            en: "Search your deck for a Basic Pokemon named Nidoran? or Nidoran? and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
            ja: "Nidoranという名前の基本的なポケモンをデッキを検索しますか？またはニドラン？そして、それをあなたのベンチに置きます。その後、デッキをシャッフルします。 （ベンチがいっぱいの場合、この攻撃を使用できません。）",
            fr: "Recherchez votre deck pour un Pokémon de base nommé Nidoran? ou Nidoran? Et mettez-le sur votre banc. Mélanger votre deck par la suite. (Vous ne pouvez pas utiliser cette attaque si votre banc est plein.)",
            de: "Suchen Sie Ihr Deck nach einem einfachen Pokemon namens Nidoran? Oder Nidoran? und leg es auf deine Bank. Mischen Sie anschließend Ihr Deck. (Sie können diesen Angriff nicht verwenden, wenn Ihre Bank voll ist.)",
            es: "¿Busca en tu mazo un Pokémon básico llamado Nidoran? ¿O Nidoran? y póngalo en tu banco. Baraja tu mazo después. (No puedes usar este ataque si tu banco está lleno).",
            it: "Cerca nel tuo mazzo un Pokemon di base di nome Nidoran? o Nidoran? E mettilo in panchina. Shuffle il tuo mazzo in seguito. (Non puoi usare questo attacco se la tua panchina è piena.)",
            pt: "Pesquise seu baralho por um Pokémon básico chamado Nidoran? ou nidoran? E coloque -o em seu banco. Afaste seu baralho depois. (Você não pode usar este ataque se o seu banco estiver cheio.)",
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
