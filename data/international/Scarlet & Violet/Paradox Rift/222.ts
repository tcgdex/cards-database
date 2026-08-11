import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [785],
	set: Set,

	name: {
		'en-us': "Tapu Koko ex",
		'fr-fr': "Tokorico-ex",
		'es-es': "Tapu Koko ex",
		'it-it': "Tapu Koko-ex",
		'pt-br': "Tapu Koko ex",
		'de-de': "Kapu-Riki-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Vengeful Shock",
			'fr-fr': "Choc Vengeur",
			'es-es': "Descarga Vengativa",
			'it-it': "Shock Vendicativo",
			'pt-br': "Choque Vingativo",
			'de-de': "Racheschock"
		},

		effect: {
			'en-us': "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 90 more damage, and your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige 90 dégâts supplémentaires, et le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 90 puntos de daño más, y el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 90 danni in più e il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque durante o último turno do seu oponente, este ataque causará 90 pontos de dano a mais e o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'de-de': "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 90 Schadenspunkte mehr zu und das Aktive Pokémon deines Gegners ist jetzt paralysiert."
		},

		damage: "30+"
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Extreme Current",
			'fr-fr': "Courant Extrême",
			'es-es': "Corriente Extrema",
			'it-it': "Correntestrema",
			'pt-br': "Corrente Extrema",
			'de-de': "Extreme Strömung"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740765,
				tcgplayer: 523903,
				cardtrader: 265316
			}
		},
	],

	suffix: "ex",
	illustrator: "PLANETA Igarashi",

	
}

export default card
