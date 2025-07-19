import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Sandslash (Delta Species)",
         ja: "サンドスラッシュ（デルタ種）",
         fr: "Sandslash (espèce delta)",
         de: "Sandslash (Delta -Arten)",
         es: "Sandslash (especie delta)",
         it: "Sandslash (Delta Species)",
         pt: "Sandshlash (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [28],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Delta Storm",
            ja: "デルタストーム",
            fr: "Tempête delta",
            de: "Delta Sturm",
            es: "Tormenta delta",
            it: "Delta Storm",
            pt: "Delta Storm",
          },
          effect: {
            en: "As long as Sandslash is your Active PokÃ©mon, put 1 damage counter on each of your opponent's PokÃ©mon-ex between turns.",
            ja: "SandslashがアクティブなPokã©Monである限り、ターンの間に対戦相手のPokã©Mon-Exのそれぞれに1つのダメージカウンターを置きます。",
            fr: "Tant que Sandslash est votre poké actif, mettez 1 compteur de dégâts sur chacun des poké de votre adversaire entre les tours.",
            de: "Solange Sandslash Ihr aktiver Poké Mon Mon ist, legen Sie 1 Schadenschalter auf die Poké-Mon-ex zwischen den Kurven Ihres Gegners.",
            es: "Mientras Sandslash sea su Poké Mon activo, coloque 1 contador de daño en cada uno de los pokhm © de su oponente entre turnos.",
            it: "Finché la sandslash è il tuo poké attivo mon, metti 1 contatore di danni su ciascuno dei poké mon-ex del tuo avversario tra i turni.",
            pt: "Enquanto o areia é o seu Poké Mon ativo, coloque 1 contador de danos em cada um dos Poké-Ex entre voltas do seu oponente.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Rend",
            ja: "レンド",
            fr: "Déchirer",
            de: "Zerreißen",
            es: "Desgarrar",
            it: "Rend",
            pt: "Rend",
          },
          effect: {
            en: "If the Defending Pokemon already has any damage counters on it, this attack does 20 damage plus 20 more damage.",
            ja: "ディフェンディングポケモンがすでにダメージカウンターを持っている場合、この攻撃は20ダメージに加えて20ダメージを与えます。",
            fr: "Si le Pokémon en défense a déjà des compteurs de dégâts, cette attaque fait 20 dégâts plus 20 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokémon bereits Schadenszähler hat, verursacht dieser Angriff 20 Schaden zuzüglich 20 weitere Schäden.",
            es: "Si el Pokémon defensor ya tiene algún contador de daño, este ataque hace 20 daños más 20 daños más.",
            it: "Se il Pokemon in carica ha già contatori di danno, questo attacco infligge 20 danni più 20 danni.",
            pt: "Se o Pokémon atual já tiver algum contador de danos, esse ataque causará 20 danos mais 20 danos.",
          },
        },
        {
          cost: ["Metal", "Colorless", "Colorless"],
          name: {
            en: "Slash",
            ja: "スラッシュ",
            fr: "Sabrer",
            de: "Schrägstrich",
            es: "Barra oblicua",
            it: "Barra",
            pt: "Slash",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
