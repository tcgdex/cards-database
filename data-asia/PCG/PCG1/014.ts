import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Venomoth",
         ja: "venomoth",
         fr: "Venomoth",
         de: "Venomoth",
         es: "Veneno",
         it: "Venomoth",
         pt: "Venomoth",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [49],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Protective Dust",
            ja: "保護ダスト",
            fr: "Poussière de protection",
            de: "Schutzstaub",
            es: "Polvo protector",
            it: "Polvere protettiva",
            pt: "Poeira protetora",
          },
          effect: {
            en: "Prevent all effects of attacks, except damage, done to Venomoth by the Attacking PokÃ©mon.",
            ja: "攻撃するポカンによって毒液に与えられた損傷を除く攻撃のすべての影響を防ぎます。",
            fr: "Empêchez tous les effets des attaques, à l'exception des dégâts, causés à Venomoth par les poké attaquants.",
            de: "Verhindern Sie alle Auswirkungen von Angriffen, mit Ausnahme von Schäden, die durch den angreifenden Poké Mon mon an Venomoth angerichtet wurden.",
            es: "Evite todos los efectos de los ataques, excepto el daño, realizado a Venomoth por el Poké Mon.",
            it: "Prevenire tutti gli effetti degli attacchi, ad eccezione del danno, fatto a Venomoth mediante l'attacco Poké mon.",
            pt: "Evite todos os efeitos dos ataques, exceto danos, causados a Venomoth pelo ataque de ataque.",
          },
      }],

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Sleep Poison",
            ja: "眠り毒",
            fr: "Poison de sommeil",
            de: "Schlafgift",
            es: "Veneno del sueño",
            it: "Veleno per dormire",
            pt: "Veneno do sono",
          },
          effect: {
            en: "The Defending Pokemon is now Asleep and Poisoned.",
            ja: "防御するポケモンは今眠っていて毒されています。",
            fr: "Le Pokémon en défense est maintenant endormi et empoisonné.",
            de: "Das verteidigende Pokémon schläft jetzt und vergiftet.",
            es: "El Pokémon defensor ahora está dormido y envenenado.",
            it: "Il Pokemon in carica è ora addormentato e avvelenato.",
            pt: "O Pokémon atual está agora dormindo e envenenado.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Razor Wind",
            ja: "かみそりの風",
            fr: "Vent de rasoir",
            de: "Rasierender Wind",
            es: "Viento de afeitar",
            it: "Vento del rasoio",
            pt: "Vento de barbear",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada.",
          },
          damage: 60,
        },
      ],


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
