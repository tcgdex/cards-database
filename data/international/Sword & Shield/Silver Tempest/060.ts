import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [96],
	set: Set,

	name: {
		'en-us': "Drowzee",
		'fr-fr': "Soporifik",
		'es-es': "Drowzee",
		'it-it': "Drowzee",
		'pt-br': "Drowzee",
		'de-de': "Traumato"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Psypunch",
			'fr-fr': "Coup de Poing Psy",
			'es-es': "Psicopuño",
			'it-it': "Psicopugno",
			'pt-br': "Soco Psíquico",
			'de-de': "Psyhieb"
		},

		damage: 10
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Hypnotic Ray",
			'fr-fr': "Onde Hypnotique",
			'es-es': "Rayo Hipnótico",
			'it-it': "Ipnoraggio",
			'pt-br': "Raio Hipnótico",
			'de-de': "Hypnotischer Strahl"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "It puts its prey to sleep and devours their dreams. It seems that bad dreams taste sour, so Drowzee doesn't particularly like eating them.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682107,
				tcgplayer: 451714
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682107,
				tcgplayer: 451714
			}
		},
	],
}

export default card
