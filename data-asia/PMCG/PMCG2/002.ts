import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Oddish",
         ja: "奇妙な",
         fr: "Bizarre",
         de: "Seltsam",
         es: "Extraño",
         it: "Strano",
         pt: "Ímpar",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [43],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Stun Spore",
            ja: "スタン胞子",
            fr: "Spored",
            de: "Stun Spore",
            es: "Espora",
            it: "Spora stordente",
            pt: "Esporo de atordoamento",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Grass"],
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
            en: "Search your deck for a Basic Pokemon named Oddish and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
            ja: "Oddishという名前の基本的なポケモンをデッキで検索し、ベンチに置きます。その後、デッキをシャッフルします。 （ベンチがいっぱいの場合、この攻撃を使用できません。）",
            fr: "Recherchez votre deck un pokemon de base nommé Oddish et mettez-le sur votre banc. Mélanger votre deck par la suite. (Vous ne pouvez pas utiliser cette attaque si votre banc est plein.)",
            de: "Suchen Sie Ihr Deck nach einem einfachen Pokemon namens Oddish und legen Sie es auf Ihre Bank. Mischen Sie anschließend Ihr Deck. (Sie können diesen Angriff nicht verwenden, wenn Ihre Bank voll ist.)",
            es: "Busque en su mazo un Pokémon básico llamado Oddish y póngalo en su banco. Baraja tu mazo después. (No puedes usar este ataque si tu banco está lleno).",
            it: "Cerca nel tuo mazzo un Pokemon di base di nome Oddish e mettilo sulla panchina. Shuffle il tuo mazzo in seguito. (Non puoi usare questo attacco se la tua panchina è piena.)",
            pt: "Pesquise seu baralho por um Pokémon básico chamado Oddish e coloque -o em seu banco. Afaste seu baralho depois. (Você não pode usar este ataque se o seu banco estiver cheio.)",
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
