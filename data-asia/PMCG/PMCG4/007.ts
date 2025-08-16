import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Muk",
         ja: "暗いMuk",
         fr: "Muk noir",
         de: "Dark Muk",
         es: "Muk oscuro",
         it: "Muk oscuro",
         pt: "Muk escuro",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [89],
      hp: 60,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Sticky Goo",
            ja: "粘着性のグー",
            fr: "Gluant collant",
            de: "Klebrige Gänsehaut",
            es: "Pegajoso",
            it: "Appiccicoso appiccicoso",
            pt: "Goo pegajoso",
          },
          effect: {
            en: "As long as Dark Muk is your Active Pokmon, your opponent pays Colorless Colorless more to retreat his or her Active Pokmon. This power stops working while Dark Muk is Asleep, Confused, or Paralyzed.",
            ja: "暗いMukがあなたのアクティブなポケモンである限り、あなたの対戦相手は彼または彼女のアクティブなポケモンを後退させるために無色の無色のより多くを支払います。このパワーは、暗いムックが眠っている、混乱し、麻痺している間に機能しなくなります。",
            fr: "Tant que Dark Muk est votre Pokémon actif, votre adversaire paie davantage incolore pour retirer son Pokémon actif. Ce pouvoir cesse de fonctionner pendant que Dark Muk dort, confus ou paralysé.",
            de: "Solange Dark Muk Ihr aktives Pokémon ist, zahlt Ihr Gegner farbloser farblos mehr, um sein aktives Pokémon zurückzuziehen. Diese Kraft hört auf, zu arbeiten, während Dark Muk schläft, verwirrt oder gelähmt ist.",
            es: "Mientras Dark Muk sea tu Pokémon activo, tu oponente paga más incoloro incoloro para retirar su Pokémon activo. Este poder deja de funcionar mientras Dark Muk está dormido, confundido o paralizado.",
            it: "Finché Dark Muk è il tuo Pokemon attivo, il tuo avversario paga incolore incolore di più per ritirarsi il suo Pokemon attivo. Questo potere smette di funzionare mentre Dark Muk è addormentato, confuso o paralizzato.",
            pt: "Enquanto o Dark Muk for seu Pokémon ativo, seu oponente paga mais incolor para recuperar o Pokémon ativo. Esse poder para de funcionar enquanto o Dark Muk está dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Sludge Punch",
            ja: "スラッジパンチ",
            fr: "Coup de poing",
            de: "Schlammstempel",
            es: "Puñetazo",
            it: "Punch di fanghi",
            pt: "Sludge Punch",
          },
          effect: {
            en: "The Defending Pokemon is now Poisoned.",
            ja: "防御ポケモンは現在中毒になっています。",
            fr: "Le Pokémon en défense est maintenant empoisonné.",
            de: "Das verteidigende Pokemon ist jetzt vergiftet.",
            es: "El Pokémon defensor ahora está envenenado.",
            it: "Il Pokemon in carica è ora avvelenato.",
            pt: "O Pokémon atual agora está envenenado.",
          },
          damage: 20,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
