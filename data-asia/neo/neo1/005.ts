import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Hoppip",
         ja: "ホッピップ",
         fr: "Hoppip",
         de: "Hoppip",
         es: "Hoppip",
         it: "Hoppip",
         pt: "Hoppip",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [187],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Hop",
            ja: "ホップ",
            fr: "Houblon",
            de: "Hüpfen",
            es: "Brincar",
            it: "Salto",
            pt: "Saltar",
          },
          damage: 10,
        },
        {
          cost: ["Grass"],
          name: {
            en: "Sprout",
            ja: "芽",
            fr: "Germer",
            de: "Sprießen",
            es: "Brotar",
            it: "Germoglio",
            pt: "Brotar",
          },
          effect: {
            en: "Search your deck for a Basic Pokemon named Hoppip and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
            ja: "デッキを検索して、ホッピップという名前の基本的なポケモンを探して、ベンチに置きます。その後、デッキをシャッフルします。 （ベンチがいっぱいの場合、この攻撃を使用できません。）",
            fr: "Recherchez votre deck pour un pokemon de base nommé Hoppip et mettez-le sur votre banc. Mélanger votre deck par la suite. (Vous ne pouvez pas utiliser cette attaque si votre banc est plein.)",
            de: "Suchen Sie Ihr Deck nach einem einfachen Pokemon namens Hoppip und legen Sie es auf Ihre Bank. Mischen Sie anschließend Ihr Deck. (Sie können diesen Angriff nicht verwenden, wenn Ihre Bank voll ist.)",
            es: "Busque en su mazo un Pokémon básico llamado Hoppip y póngalo en su banco. Baraja tu mazo después. (No puedes usar este ataque si tu banco está lleno).",
            it: "Cerca nel tuo mazzo un Pokemon di base chiamato Hoppip e mettilo sulla panchina. Shuffle il tuo mazzo in seguito. (Non puoi usare questo attacco se la tua panchina è piena.)",
            pt: "Pesquise seu baralho por um Pokémon básico chamado Hoppip e coloque -o em seu banco. Afaste seu baralho depois. (Você não pode usar este ataque se o seu banco estiver cheio.)",
          },
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
