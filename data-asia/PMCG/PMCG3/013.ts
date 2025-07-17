import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Krabby",
         ja: "クラビー",
         fr: "Krabby",
         de: "Krabby",
         es: "Cañón",
         it: "Krabby",
         pt: "Krabby",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [98],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
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
            en: "Search your deck for a Basic Pokemon named Krabby and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
            ja: "Krabbyという名前の基本的なポケモンをデッキに検索し、ベンチに置いてください。その後、デッキをシャッフルします。 （ベンチがいっぱいの場合、この攻撃を使用できません。）",
            fr: "Recherchez votre deck pour un Pokémon de base nommé Krabby et mettez-le sur votre banc. Mélanger votre deck par la suite. (Vous ne pouvez pas utiliser cette attaque si votre banc est plein.)",
            de: "Suchen Sie Ihr Deck nach einem einfachen Pokemon namens Krabby und legen Sie es auf Ihre Bank. Mischen Sie anschließend Ihr Deck. (Sie können diesen Angriff nicht verwenden, wenn Ihre Bank voll ist.)",
            es: "Busque en su mazo un Pokémon básico llamado Krabby y póngalo en su banco. Baraja tu mazo después. (No puedes usar este ataque si tu banco está lleno).",
            it: "Cerca nel tuo mazzo un Pokemon di base di nome Krabby e mettilo in panchina. Shuffle il tuo mazzo in seguito. (Non puoi usare questo attacco se la tua panchina è piena.)",
            pt: "Pesquise seu baralho por um Pokémon básico chamado Krabby e coloque -o em seu banco. Afaste seu baralho depois. (Você não pode usar este ataque se o seu banco estiver cheio.)",
          },

        },
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Irongrip",
            ja: "Irongrip",
            fr: "Irongrip",
            de: "IRONGRIP",
            es: "Irongrip",
            it: "Irongrip",
            pt: "Irongrip",
          },
          damage: 20,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
