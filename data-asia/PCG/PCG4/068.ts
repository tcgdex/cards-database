import {Card} from "../../../interfaces"
import Set from "../PCG4"

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
      types: ["Fighting"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Spiral Swirl",
            ja: "スパイラルスワール",
            fr: "Tourbillon en spirale",
            de: "Spiralwirbel",
            es: "Espiral giratorio",
            it: "Turbinio a spirale",
            pt: "Redeireiro em espiral",
          },
          effect: {
            en: "If Poliwrath is your Active PokÃ©mon and is Knocked Out by damage from an opponent's attack, the Attacking PokÃ©mon is now Confused.",
            ja: "Poliwrathがあなたのアクティブなポカモンであり、相手の攻撃によるダメージによってノックアウトされた場合、攻撃するポケモンは今混乱しています。",
            fr: "Si Poliwrath est votre poké actif et est assommé par les dommages de l'attaque d'un adversaire, le poké attaquant est désormais confus.",
            de: "Wenn Poliwrath Ihr aktiver Poké Mon Mon ist und durch Schäden durch den Angriff eines Gegners ausgeschlagen wird, ist der angreifende Poké Mon Mon verwirrt.",
            es: "Si Poliwrath es tu Poké Mon activo y es noqueada por el daño del ataque de un oponente, el Poké Mon atacante ahora está confundido.",
            it: "Se Poliwrath è il tuo poké attivo e viene eliminato dai danni da un attacco di un avversario, il poké monopro attaccante è ora confuso.",
            pt: "Se o Poliwrath é o seu Poké Mon ativo e é derrubado por danos causados pelo ataque de um oponente, o Poké -Mon atacante está agora confuso.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Beatdown",
            ja: "ビートダウン",
            fr: "Battement",
            de: "Beatdown",
            es: "Paliza",
            it: "Batdown",
            pt: "Batida",
          },
          effect: {
            en: "If the Defending Pokemon is a Darkness Pokemon or has Dark in its name, this attack does 40 damage plus 30 more damage.",
            ja: "防御ポケモンが暗闇のポケモンであるか、その名前が暗い場合、この攻撃は40ダメージと30のダメージを与えます。",
            fr: "Si le Pokémon en défense est un Pokémon de l'obscurité ou a sombre dans son nom, cette attaque fait 40 dégâts plus 30 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokémon ein Dunkelheitspokémon ist oder in seinem Namen eine Dunkelheit hat, verursacht dieser Angriff 40 Schäden plus 30 weitere Schäden.",
            es: "Si el Pokémon defensor es un Pokémon de oscuridad o tiene oscuro en su nombre, este ataque hace 40 daños más 30 más de daño.",
            it: "Se il Pokemon in carica è un Pokemon Oscurità o ha buio nel suo nome, questo attacco fa 40 danni più 30 danni.",
            pt: "Se o Pokémon atual é um Pokémon da escuridão ou tem escuro em seu nome, esse ataque causa 40 danos mais 30 mais danos.",
          },
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Hyper Splash",
            ja: "ハイパースプラッシュ",
            fr: "Hyper éclaboussure",
            de: "Hyperspritzer",
            es: "Hiper splash",
            it: "Hyper Splash",
            pt: "Hiper splash",
          },
          effect: {
            en: "If the Defending Pokemon is a Stage 2 Evolved Pokemon, this attack does 60 damage plus 30 more damage.",
            ja: "防御ポケモンがステージ2の進化したポケモンである場合、この攻撃は60ダメージに加えて30ダメージを与えます。",
            fr: "Si le Pokémon en défense est un Pokémon évolué de stade 2, cette attaque fait 60 dégâts plus 30 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokémon ein Pokémon der Stufe 2 ist, verursacht dieser Angriff 60 Schaden zuzüglich 30 weitere Schäden.",
            es: "Si el Pokémon defensor es un Pokémon evolucionado en la etapa 2, este ataque hace 60 daños más 30 más de daño.",
            it: "Se il Pokemon in carica è un Pokemon evoluto della fase 2, questo attacco infligge 60 danni più 30 danni in più.",
            pt: "Se o Pokémon atual for um Pokémon evoluído do estágio 2, esse ataque causará 60 danos mais 30 danos.",
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
