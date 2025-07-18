import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Paras",
         ja: "パラ",
         fr: "Paras",
         de: "Paras",
         es: "Paras",
         it: "Paras",
         pt: "Parágrafos",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [46],
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
            en: "Search your deck for up to 2 Basic Pokemon and put them onto your Bench. Then, shuffle your deck.",
            ja: "デッキを最大2つの基本的なポケモンを検索し、ベンチに置きます。次に、デッキをシャッフルします。",
            fr: "Recherchez votre deck jusqu'à 2 Pokémon de base et mettez-les sur votre banc. Ensuite, mélanger votre deck.",
            de: "Suchen Sie Ihr Deck nach bis zu 2 Basic -Pokemon und legen Sie es auf Ihre Bank. Dann mischen Sie Ihr Deck.",
            es: "Busque en su mazo hasta 2 Pokémon básicos y colóquelos en su banco. Entonces, baraja tu mazo.",
            it: "Cerca nel tuo mazzo fino a 2 Pokemon di base e mettili sulla panchina. Quindi, mescola il tuo mazzo.",
            pt: "Pesquise seu baralho até 2 Pokémon básico e coloque -os em seu banco. Então, embaralhe seu baralho.",
          },
        },
        {
          cost: ["Grass"],
          name: {
            en: "Toxic Spore",
            ja: "有毒な胞子",
            fr: "Spores toxiques",
            de: "Giftige Sporen",
            es: "Espora tóxico",
            it: "Spora tossica",
            pt: "Esporo tóxico",
          },
          effect: {
            en: "Flip a coin. If heads, your opponent's Active Pokemon is now Poisoned.",
            ja: "コインをひっくり返します。頭の場合、相手のアクティブなポケモンが毒されます。",
            fr: "Retourner une pièce. Si les têtes, le pokemon actif de votre adversaire est maintenant empoisonné.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das aktive Pokémon Ihres Gegners jetzt vergiftet.",
            es: "Voltea una moneda. Si se dirige, el Pokémon activo de tu oponente ahora está envenenado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon attivo del tuo avversario è ora avvelenato.",
            pt: "Vire uma moeda. Se as cabeças, o Pokémon ativo do seu oponente agora está envenenado.",
          },
          damage: 10,
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
