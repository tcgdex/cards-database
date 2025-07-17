import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Nidoran F - 006/088",
         ja: "Nidoran F -006/088",
         fr: "Nidoran F - 006/088",
         de: "Nidoran F - 006/088",
         es: "Nidoran F - 006/088",
         it: "Nidoran F - 006/088",
         pt: "Nidoran F - 006/088",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [29],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
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
            en: "Search your deck for a Basic Pokemon card named Nidoran ? or Nidoran ? and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
            ja: "Nidoranという名前の基本的なポケモンカードをデッキを検索しますか？またはニドラン？そして、それをあなたのベンチに置きます。その後、デッキをシャッフルします。 （ベンチがいっぱいの場合、この攻撃を使用できません。）",
            fr: "Recherchez votre jeu une carte Pokémon de base nommée Nidoran? ou Nidoran? Et mettez-le sur votre banc. Mélanger votre deck par la suite. (Vous ne pouvez pas utiliser cette attaque si votre banc est plein.)",
            de: "Suchen Sie Ihr Deck nach einer einfachen Pokemon -Karte namens Nidoran? Oder Nidoran? und leg es auf deine Bank. Mischen Sie anschließend Ihr Deck. (Sie können diesen Angriff nicht verwenden, wenn Ihre Bank voll ist.)",
            es: "¿Busca en su mazo una tarjeta Pokémon básica llamada Nidoran? ¿O Nidoran? y póngalo en tu banco. Baraja tu mazo después. (No puedes usar este ataque si tu banco está lleno).",
            it: "Cerca nel tuo mazzo una carta Pokemon di base chiamata Nidoran? o Nidoran? E mettilo in panchina. Shuffle il tuo mazzo in seguito. (Non puoi usare questo attacco se la tua panchina è piena.)",
            pt: "Pesquise seu baralho por um cartão Pokemon básico chamado Nidoran? ou nidoran? E coloque -o em seu banco. Afaste seu baralho depois. (Você não pode usar este ataque se o seu banco estiver cheio.)",
          },
        },
        {
          cost: ["Grass"],
          name: {
            en: "Scratch",
            ja: "傷",
            fr: "Gratter",
            de: "Kratzen",
            es: "Rascar",
            it: "Graffio",
            pt: "Arranhar",
          },
          damage: 10,
        },
      ],

      retreat: 1,

};
