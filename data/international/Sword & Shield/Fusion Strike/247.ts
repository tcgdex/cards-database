import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [609],
	set: Set,

	name: {
		'en-us': "Chandelure V",
		'fr-fr': "Lugulabre V",
		'es-es': "Chandelure V",
		'it-it': "Chandelure V",
		'pt-br': "Chandelure V",
		'de-de': "Skelabra V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Saki Hayashiro",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Confuse Ray",
			'fr-fr': "Onde Folie",
			'de-de': "Konfusstrahl",
			'es-es': "Rayo Confuso",
			'pt-br': "Raio da Confusão",
			'it-it': "Stordiraggio"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso."
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Poltergeist",
			'fr-fr': "Esprit Frappeur",
			'de-de': "Poltergeist",
			'es-es': "Poltergeist",
			'pt-br': "Poltergeist",
			'it-it': "Poltergeist"
		},

		damage: "40×",

		effect: {
			'en-us': "Your opponent reveals their hand. This attack does 40 damage for each Trainer card you find there.",
			'fr-fr': "Votre adversaire dévoile sa main. Cette attaque inflige 40 dégâts pour chaque carte Dresseur que vous y trouvez.",
			'de-de': "Dein Gegner zeigt dir seine Handkarten. Diese Attacke fügt für jede Trainerkarte, die du dort findest, 40 Schadenspunkte zu.",
			'es-es': "Tu rival enseña las cartas de su mano. Este ataque hace 40 puntos de daño por cada carta de Entrenador que encuentres entre ellas.",
			'pt-br': "Seu oponente revela a própria mão. Este ataque causa 40 pontos de dano para cada carta de Treinador que encontrar lá.",
			'it-it': "Il tuo avversario mostra le carte che ha in mano. Questo attacco infligge 40 danni per ogni carta Allenatore presente tra quelle carte."
		}
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582983,
				tcgplayer: 253141
			}
		},
	],
}

export default card
