import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Bellsprout",
         ja: "ベルスプラウト",
         fr: "Cloche",
         de: "Bellsprout",
         es: "Chaparrilla",
         it: "BellsProut",
         pt: "Bellsprout",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [69],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Vine Whip",
            ja: "つる鞭",
            fr: "Fouet de vigne",
            de: "Rebepeitsche",
            es: "Vine látigo",
            it: "Whip di vite",
            pt: "Vine Whip",
          },
          damage: 10,
        },
        {
          cost: ["Grass"],
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
            en: "Search your deck for a Basic Pokemon named Bellsprout and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
            ja: "Bellsproutという名前の基本的なポケモンをデッキに検索し、ベンチに置きます。その後、デッキをシャッフルします。 （ベンチがいっぱいの場合、この攻撃を使用できません。）",
            fr: "Recherchez votre deck pour un pokemon de base nommé Bellsprout et mettez-le sur votre banc. Mélanger votre deck par la suite. (Vous ne pouvez pas utiliser cette attaque si votre banc est plein.)",
            de: "Suchen Sie Ihr Deck nach einem einfachen Pokemon namens Bellsprout und legen Sie es auf Ihre Bank. Mischen Sie anschließend Ihr Deck. (Sie können diesen Angriff nicht verwenden, wenn Ihre Bank voll ist.)",
            es: "Busque en su mazo un Pokémon básico llamado BellSprout y póngalo en su banco. Baraja tu mazo después. (No puedes usar este ataque si tu banco está lleno).",
            it: "Cerca nel tuo mazzo un Pokemon di base di nome Bellsprout e mettilo sulla panchina. Shuffle il tuo mazzo in seguito. (Non puoi usare questo attacco se la tua panchina è piena.)",
            pt: "Pesquise seu baralho por um Pokémon básico chamado Bellsprout e coloque -o em seu banco. Afaste seu baralho depois. (Você não pode usar este ataque se o seu banco estiver cheio.)",
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
