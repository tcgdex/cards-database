import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Togedemaru ex",
		'fr-fr': "Togedemaru-ex",
		'es-es': "Togedemaru ex",
		'es-mx': "Togedemaru ex",
		'de-de': "Togedemaru-ex",
		'it-it': "Togedemaru-ex",
		'pt-br': "Togedemaru ex"
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [777],
	hp: 190,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Stun Needle",
			'fr-fr': "Para-Dard",
			'es-es': "Aguja Paralizante",
			'es-mx': "Aguja Paralizante",
			'de-de': "Betäubungsnadel",
			'it-it': "Ago Paralizzante",
			'pt-br': "Agulha Estonteante"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado."
		},

		damage: 20
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Spiky Rolling",
			'fr-fr': "Roulade Piquante",
			'es-es': "Giro Espinoso",
			'es-mx': "Giro Punzante",
			'de-de': "Stachelrollen",
			'it-it': "Rotolaspina",
			'pt-br': "Giro Espinhoso"
		},

		effect: {
			'en-us': "If this Pokémon used Spiky Rolling during your last turn, this attack does 80 more damage.",
			'fr-fr': "Si ce Pokémon a utilisé Roulade Piquante pendant votre dernier tour, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si este Pokémon usó Giro Espinoso durante tu último turno, este ataque hace 80 puntos de daño más.",
			'es-mx': "Si este Pokémon usó Giro Punzante durante tu último turno, este ataque hace 80 puntos de daño más.",
			'de-de': "Wenn dieses Pokémon während deines letzten Zuges Stachelrollen eingesetzt hat, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			'it-it': "Se questo Pokémon ha usato Rotolaspina durante il tuo ultimo turno, questo attacco infligge 80 danni in più.",
			'pt-br': "Se este Pokémon usou Giro Espinhoso durante o seu último turno, este ataque causará 80 pontos de dano a mais."
		},

		damage: "80+"
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
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869760,
				tcgplayer: 675961
			}
		}
	],
}

export default card
