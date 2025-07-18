import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Rhydon",
         ja: "ライドン",
         fr: "Rhydon",
         de: "Rhydon",
         es: "Rhydon",
         it: "Rhydon",
         pt: "Rhydon",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [112],
      hp: 90,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Power Diffusion",
            ja: "電力拡散",
            fr: "Diffusion de puissance",
            de: "Leistungsdiffusion",
            es: "Difusión de potencia",
            it: "Diffusione di potenza",
            pt: "Difusão de potência",
          },
          effect: {
            en: "As long as Rhydon is your Active PokÃ©mon, prevent all damage done by attacks to all of your Benched PokÃ©mon.",
            ja: "Rhydonがあなたのアクティブなポカモンである限り、あなたのすべてのベンチされたPokã©Monへの攻撃によってすべての損傷を防ぎます。",
            fr: "Tant que Rhydon est votre poké actif, empêchez tous les dommages causés par les attaques à tous vos poké bancs.",
            de: "Verhindern Sie, wie Rhydon Ihr aktiver Poké Mon Mon ist, alle Schäden, die durch Angriffe auf alle Ihre Bank -Poké -mon angerichtet werden.",
            es: "Mientras Rhydon sea su Poké Mon activo, evite todos los daños causados por ataques a todos sus banqueros Poké Mon.",
            it: "Finché Rhydon è il tuo poké attivo, impedisci tutti i danni causati dagli attacchi a tutto il tuo poké mon.",
            pt: "Enquanto Rhydon for o seu Poké ativo, evite todos os danos causados por ataques a todos os seus pokãs em bancos.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Horn Drill",
            ja: "ホーンドリル",
            fr: "Perceuse à cornes",
            de: "Hornbohrer",
            es: "Taladro",
            it: "Trapano a corno",
            pt: "Broca de chifre",
          },
          damage: 20,
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
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
            en: "If the Defending Pokemon has any Poké-Powers or Poké-Bodies, this attack does 50 damage plus 20 more damage.",
            ja: "防御するポケモンにポケパワーまたはポケボディがある場合、この攻撃は50のダメージと20のダメージを与えます。",
            fr: "Si le Pokémon en défense a des poké-powers ou des poké-corps, cette attaque fait 50 dégâts plus 20 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokémon Poké-Powers oder Poké-Körper hat, verursacht dieser Angriff 50 Schaden zuzüglich 20 weitere Schäden.",
            es: "Si el Pokémon defensor tiene algún Poké-Powers o Poké-Bodies, este ataque hace 50 daños más 20 más de daño.",
            it: "Se il Pokemon in difesa ha poke-powers o bodie di Poké, questo attacco infligge 50 danni più 20 danni.",
            pt: "Se o Pokémon atual tiver algum poké-power ou poké corpos, esse ataque causará 50 danos mais 20 danos.",
          },
        },
      ],

      retreat: 2,

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
