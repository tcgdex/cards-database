import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Poliwrath",
         ja: "Poliwrath",
         fr: "Poliwrath",
         de: "Poliwrath",
         es: "Poliwrath",
         it: "Poliwrath",
         pt: "Poliwrath",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [62],
      hp: 120,
      types: ["Water"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Spiral",
            ja: "スパイラル",
            fr: "Spirale",
            de: "Spiral",
            es: "Espiral",
            it: "Spirale",
            pt: "Espiral",
          },
          effect: {
            en: "As long as Poliwrath is your Active PokÃ©mon, your opponent's Confused PokÃ©mon can't retreat.",
            ja: "Poliwrathがあなたのアクティブなポカモンである限り、あなたの相手の混乱したポカモンは退却することはできません。",
            fr: "Tant que Poliwrath est votre poké actif, le poké confus de votre adversaire ne peut pas se retirer.",
            de: "Solange Poliwrath Ihr aktiver Poké Mon Mon ist, kann sich der verwirrte Poké -Mong Ihres Gegners nicht zurückziehen.",
            es: "Mientras Poliwrath sea tu Poké Mon activo, el confundido Poké de tu oponente no puede retirarse.",
            it: "Finché Poliwrath è il tuo poké attivo, il confuso del tuo avversario non può ritirarsi.",
            pt: "Enquanto Poliwrath for o seu Poké de Mon ativo, o Poké Mon do seu oponente não pode recuar.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Split Spiral Punch",
            ja: "スパイラルパンチを分割します",
            fr: "Punch en spirale divisé",
            de: "Split Spiral Punch",
            es: "División de espiral",
            it: "Punch a spirale diviso",
            pt: "Punto em espiral dividido",
          },
          effect: {
            en: "The Defending Pokemon is now Confused.",
            ja: "防御ポケモンは今混乱しています。",
            fr: "Le Pokémon en défense est maintenant confus.",
            de: "Das verteidigende Pokemon ist jetzt verwirrt.",
            es: "El Pokémon defensor ahora está confundido.",
            it: "Il Pokemon in carica è ora confuso.",
            pt: "O Pokemon atual agora está confuso.",
          },
          damage: 20,
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Mega Throw",
            ja: "メガスロー",
            fr: "Méga jet",
            de: "Megawurf",
            es: "Mega lanzamiento",
            it: "Mega lancio",
            pt: "Mega arremesso",
          },
          effect: {
            en: "If the Defending Pokemon is Pokemon-ex, this attack does 50 damage plus 30 more damage.",
            ja: "防御ポケモンがポケモン-Exの場合、この攻撃は50のダメージと30ダメージを与えます。",
            fr: "Si le Pokémon en défense est Pokemon-EX, cette attaque fait 50 dégâts plus 30 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokemon Pokemon-EX ist, verursacht dieser Angriff 50 Schäden plus 30 weitere Schäden.",
            es: "Si el Pokémon defensor es Pokémon-EX, este ataque hace 50 daños más 30 más de daño.",
            it: "Se il Pokemon in carica è Pokemon-Ex, questo attacco infligge 50 danni più 30 danni.",
            pt: "Se o pokemon atual for Pokemon-Ex, esse ataque causará 50 danos mais 30 mais danos.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
