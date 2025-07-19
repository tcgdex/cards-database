import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Exploud ex",
         ja: "Exploud Ex",
         fr: "Expoud ex",
         de: "Exploud Ex",
         es: "Explaud ex",
         it: "Exploud Ex",
         pt: "Exploud Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [295],
      hp: 150,
      types: ["Colorless"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Extra Noise",
            ja: "余分なノイズ",
            fr: "Bruit supplémentaire",
            de: "Zusätzliches Geräusch",
            es: "Ruido extra",
            it: "Rumore extra",
            pt: "Ruído extra",
          },
          effect: {
            en: "As long as Exploud ex is your Active PokÃ©mon, put 1 damage counter on each of your opponent's PokÃ©mon-ex between turns.",
            ja: "Exploud ExがアクティブなPokã©Monである限り、ターンの間に対戦相手のPokã©Mon-Exのそれぞれに1つのダメージカウンターを入れます。",
            fr: "Tant que Exploud Ex est votre poké actif, mettez 1 compteur de dégâts sur chacun des pokés de votre adversaire entre les tours.",
            de: "Solange Exploud Ex Ihr aktiver Poké Mon Mon ist, setzen Sie 1 Schadenschalter auf die Poké Mon-EX Ihres Gegners zwischen den Kurven.",
            es: "Mientras Exploud ex sea su Poké Mon activo, coloque 1 contador de daño en cada uno de los pokh de su oponente entre las curvas.",
            it: "Finché Exploud ex è il tuo poké attivo, metti 1 contatore di danni su ciascuno dei poké mon-ex del tuo avversario tra i turni.",
            pt: "Enquanto o Exploud EX for o seu Poké Mon ativo, coloque 1 contador de danos em cada um dos Poké-Ex entre voltas do seu oponente.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Derail",
            ja: "脱線",
            fr: "Dérailler",
            de: "Entgleisen",
            es: "Hacer descarrilar",
            it: "Deragliare",
            pt: "Descarrilhar",
          },
          effect: {
            en: "Discard a Special Energy card, if any, attached to the Defending Pokemon.",
            ja: "防御ポケモンに取り付けられた特別なエネルギーカードを捨てます。",
            fr: "Jeter une carte d'énergie spéciale, le cas échéant, attaché au Pokémon en défense.",
            de: "Verwerfen Sie eine spezielle Energiekarte, falls vorhanden, an das verteidigende Pokémon angeschlossen.",
            es: "Deseche una tarjeta de energía especial, si la hay, unida al Pokémon defensor.",
            it: "Scartare una scheda energetica speciale, se presente, collegata al Pokemon in difesa.",
            pt: "Descarte um cartão de energia especial, se houver, anexado ao Pokémon atual.",
          },
          damage: 40,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Hyper Tail",
            ja: "ハイパーテール",
            fr: "Hyper queue",
            de: "Hyperschwanz",
            es: "Hiper cola",
            it: "Hyper Tail",
            pt: "Cauda hiper",
          },
          effect: {
            en: "If the Defending Pokemon has any Poké-Powers or Poké-Bodies, this attack does 60 damage plus 20 more damage.",
            ja: "防御するポケモンにポケーパーズまたはポケボディがある場合、この攻撃は60のダメージと20のダメージを与えます。",
            fr: "Si le Pokémon en défense a des poké-powers ou des poké-corps, cette attaque fait 60 dégâts plus 20 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokémon Poké-Powers oder Poké-Körper hat, verursacht dieser Angriff 60 Schaden zuzüglich 20 weitere Schäden.",
            es: "Si el Pokémon defensor tiene algún Poké-Powers o Poké-Bodies, este ataque hace 60 daños más 20 más de daño.",
            it: "Se il Pokemon in difesa ha poke-powers o bodie di Poké, questo attacco infligge 60 danni più 20 danni in più.",
            pt: "Se o Pokémon atual tiver algum poké-powers ou corpos Poké, esse ataque causará 60 danos mais 20 danos.",
          },
        },
      ],

      retreat: 3,

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
