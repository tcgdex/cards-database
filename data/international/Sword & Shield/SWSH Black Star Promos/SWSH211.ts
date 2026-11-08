import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [700],
	set: Set,

	name: {
		'fr-fr': "Nymphali",
		'de-de': "Feelinara",
		'es-es': "Sylveon",
		'pt-br': "Sylveon",
		'it-it': "Sylveon",
		'en-us': "Sylveon"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		'fr-fr': "Évoli",
		'de-de': "Evoli",
		'es-es': "Eevee",
		'pt-br': "Eevee",
		'it-it': "Eevee",
		'en-us': "Eevee"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'fr-fr': "Mise au Coin Brusque",
			'de-de': "Auszeittritt",
			'es-es': "Patada Pausa",
			'pt-br': "Chute e Castigo",
			'it-it': "Calcio Castigo",
			'en-us': "Time Out Kick"
		},

		effect: {
			'fr-fr': "Vous pouvez ajouter à la main de votre adversaire une Énergie attachée à son Pokémon Actif.",
			'de-de': "Du kannst deinem Gegner 1 an sein Aktives Pokémon angelegte Energie auf seine Hand geben.",
			'es-es': "Puedes poner 1 Energía unida al Pokémon Activo de tu rival en su mano.",
			'pt-br': "Você pode colocar 1 Energia ligada ao Pokémon Ativo do seu oponente na mão dele(a).",
			'it-it': "Puoi prendere un'Energia assegnata al Pokémon attivo del tuo avversario e aggiungerla alle carte che ha in mano.",
			'en-us': "You may put an Energy attached to your opponent's Active Pokémon into their hand."
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Fouet Symphonique",
			'de-de': "Symphoniepeitsche",
			'es-es': "Sinfonía de Latigazos",
			'pt-br': "Chicote Sinfônico",
			'it-it': "Frustata Sinfonica",
			'en-us': "Symphony Whip"
		},

		effect: {
			'fr-fr': "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 70 dégâts supplémentaires.",
			'de-de': "Wenn du eine Unterstützerkarte während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 70 Schadenspunkte mehr zu.",
			'es-es': "Si has jugado 1 carta de Partidario de tu mano durante este turno, este ataque hace 70 puntos de daño más.",
			'pt-br': "Se você jogou 1 carta de Apoiador da sua mão durante este turno, este ataque causará 70 pontos de dano a mais.",
			'it-it': "Se hai giocato una carta Aiuto dalla tua mano durante questo turno, questo attacco infligge 70 danni in più.",
			'en-us': "If you played a Supporter card from your hand during this turn, this attack does 70 more damage."
		},

		damage: "70+"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",

	description: {
		'en-us': "There's a Galarian fairy tale that describes a beautiful Sylveon vanquishing a dreadful dragon Pokémon."
	},

	thirdParty: {
		cardmarket: 609461
	}
}

export default card
