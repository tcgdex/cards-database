import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Crawdaunt",
         ja: "クローダント",
         fr: "Dresseur",
         de: "Crawdaunt",
         es: "Crawdaunt",
         it: "Crawdaunt",
         pt: "Crawdaunt",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [342],
      hp: 80,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Power Pinchers",
            ja: "パワーピンチャー",
            fr: "Pincements de puissance",
            de: "Power Priders",
            es: "Pinches de potencia",
            it: "Pincher di potenza",
            pt: "Binchas de potência",
          },
          effect: {
            en: "As long as Crawdaunt is your Active PokÃ©mon, when any of your Active PokÃ©mon does damage to the Defending PokÃ©mon, the attack does 10 more damage (before applying Weakness and Resistance).",
            ja: "Crawdauntがあなたのアクティブなポカモンである限り、あなたのアクティブなポカモンのいずれかが防御ポケモンにダメージを与えるとき、攻撃は10件のダメージを与えます（脱力感と抵抗を適用する前に）。",
            fr: "Tant que Crawdaunt est votre poké actif, lorsque l'un de vos poké actifs endommage le poké en défense, l'attaque fait 10 dommages supplémentaires (avant d'appliquer la faiblesse et la résistance).",
            de: "Solange Crawdaunt Ihr aktiver Pokémon ist, schadet der Angriff 10 weitere Schäden (bevor Sie Schwäche und Widerstand anwenden).",
            es: "Mientras Crawdaunt sea su Poké Mon activo, cuando cualquiera de sus Poké Mon activo da daño al Poké Mon, el ataque hace 10 daños más (antes de aplicar debilidad y resistencia).",
            it: "Finché Crawdaunt è il tuo poké attivo, quando uno qualsiasi dei tuoi poké attivo fa danni al poké difensore, l'attacco fa altri 10 danni (prima di applicare debolezza e resistenza).",
            pt: "Enquanto Crawdaunt for o seu Poké de Mon ativo, quando qualquer um dos seus Poké -Mon ativos causará danos ao Poké Mon, o ataque causa mais 10 danos (antes de aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Guillotine",
            ja: "ギロチン",
            fr: "Guillotine",
            de: "Guillotine",
            es: "Guillotina",
            it: "Ghigliottina",
            pt: "Guilhotina",
          },
          damage: 50,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
