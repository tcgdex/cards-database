import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [966],
	set: Set,

	name: {
		'en-us': "Revavroom",
		'fr-fr': "Vrombotor",
		'es-es': "Revavroom",
		'it-it': "Revavroom",
		'pt-br': "Revavroom",
		'de-de': "Knattatox"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Varoom",
		'fr-fr': "Vrombi",
		'es-es': "Varoom",
		'it-it': "Varoom",
		'pt-br': "Varoom",
		'de-de': "Knattox"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Rally Back",
			'fr-fr': "Répercussions",
			'es-es': "Apoyo Vengativo",
			'it-it': "Radunata Rinforzi",
			'pt-br': "Responder à Altura",
			'de-de': "Aufholjagd"
		},

		effect: {
			'en-us': "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 90 more damage.",
			'fr-fr': "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 90 puntos de daño más.",
			'it-it': "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 90 danni in più.",
			'pt-br': "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque durante o último turno do seu oponente, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Running Charge",
			'fr-fr': "Assaut Élancé",
			'es-es': "Carga Impulso",
			'it-it': "Carica Scattante",
			'pt-br': "Carga em Disparada",
			'de-de': "Sturmangriff"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 100 damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 100 dégâts pour chaque côté face.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 100 puntos de daño por cada cara.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 100 danni ogni volta che esce testa.",
			'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 100 pontos de dano para cada cara.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 100 Schadenspunkte pro Kopf zu."
		},

		damage: "100×"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "Revavroom viciously threatens others with the sound of its exhaust. It sticks its tongue out from its cylindrical mouth and sprays toxic fluids.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769299,
				tcgplayer: 550169
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769299,
				tcgplayer: 550169
			}
		},
	],

	illustrator: "Hasuno",

}

export default card