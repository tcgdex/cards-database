import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Greninja ex",
		'fr-fr': "Méga-Amphinobi-ex",
		'es-es': "Mega-Greninja ex",
		'es-mx': "Mega-Greninja ex",
		'de-de': "Mega-Quajutsu-ex",
		'it-it': "Mega Greninja-ex",
		'pt-br': "Mega Greninja ex"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	dexId: [658],
	hp: 350,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Frogadier"
	},
	rarity: "Mega Hyper Rare",

	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Mortal Shuriken",
			'fr-fr': "Shuriken Mortel",
			'es-es': "Shuriken Mortal",
			'es-mx': "Shuriken Mortal",
			'de-de': "Fatale Shuriken",
			'it-it': "Lame Letali",
			'pt-br': "Estrela Ninja Mortal"
		},

		effect: {
			'en-us': "Once during your turn, if this Pokémon is in the Active Spot, you may discard a Basic {W} Energy card from your hand in order to use this Ability. Place 6 damage counters on 1 of your opponent's Pokémon.",
			'fr-fr': "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez défausser une carte Énergie {W} de base de votre main pour utiliser ce talent. Placez 6 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
			'es-es': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes descartar 1 carta de Energía {W} Básica de tu mano para poder usar esta habilidad. Pon 6 contadores de daño en uno de los Pokémon de tu rival.",
			'es-mx': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes descartar 1 carta de Energía {W} Básica de tu mano para usar esta Habilidad. Pon 6 contadores de daño en 1 de los Pokémon de tu rival.",
			'de-de': "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du 1 Basis-{W}-Energiekarte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Lege 6 Schadensmarken auf 1 Pokémon deines Gegners.",
			'it-it': "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi scartare una carta Energia base {W} che hai in mano per usare questa abilità. Metti sei segnalini danno su uno dei Pokémon del tuo avversario.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá descartar uma carta de Energia {W} Básica da sua mão para usar esta Habilidade. Coloque 6 contadores de dano em 1 dos Pokémon do seu oponente."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Ninja Spinner",
			'fr-fr': "Hélice Ninja",
			'es-es': "Pirueta Ninja",
			'es-mx': "Vórtice Ninja",
			'de-de': "Ninja-Dreher",
			'it-it': "Vortice Ninja",
			'pt-br': "Giro Ninja"
		},

		cost: ["Water", "Water"],
		damage: "120+",

		effect: {
			'en-us': "You may put a {W} Energy attached to this Pokémon into your hand and have this attack do 80 more damage.",
			'fr-fr': "Vous pouvez ajouter à votre main une Énergie {W} attachée à ce Pokémon et infliger 80 dégâts supplémentaires avec cette attaque.",
			'es-es': "Puedes poner 1 Energía {W} unida a este Pokémon en tu mano y hacer que este ataque haga 80 puntos de daño más.",
			'es-mx': "Puedes poner 1 Energía {W} unida a este Pokémon en tu mano y hacer que este ataque haga 80 puntos de daño más.",
			'de-de': "Du kannst 1 an dieses Pokémon angelegte {W}-Energie auf deine Hand nehmen und diese Attacke 80 Schadenspunkte mehr zufügen lassen.",
			'it-it': "Puoi prendere un'Energia {W} assegnata a questo Pokémon, aggiungerla alle carte che hai in mano e infliggere 80 danni in più con questo attacco.",
			'pt-br': "Você pode colocar uma Energia {W} ligada a este Pokémon na sua mão e fazer este ataque causar 80 pontos de dano a mais."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 886515,
				tcgplayer: 693518
			}
		},
	],
}

export default card
