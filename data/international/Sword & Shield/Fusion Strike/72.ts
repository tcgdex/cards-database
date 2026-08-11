import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [555],
	set: Set,

	name: {
		'en-us': "Galarian Darmanitan",
		'fr-fr': "Darumacho de Galar",
		'es-es': "Darmanitan de Galar",
		'it-it': "Darmanitan di Galar",
		'pt-br': "Darmanitan de Galar",
		'de-de': "Galar-Flampivian"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Galarian Darumaka",
		'fr-fr': "Darumarond de Galar",
		'es-es': "Darumaka de Galar",
		'it-it': "Darumaka di Galar",
		'pt-br': "Darumaka de Galar",
		'de-de': "Galar-Flampion"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "SATOSHI NAKAI",

	description: {
		'en-us': "Though it has a gentle disposition, it's also very strong. It will quickly freeze the snowball on its head before going for a headbutt."
	},

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Powder Snow",
			'fr-fr': "Poudreuse",
			'de-de': "Pulverschnee",
			'es-es': "Nieve Polvo",
			'pt-br': "Neve em Pó",
			'it-it': "Polneve"
		},

		damage: 30,

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Daruma Headbutt",
			'fr-fr': "Coup d'Boule Daruma",
			'de-de': "Daruma-Kopfnuss",
			'es-es': "Cabezazo Daruma",
			'pt-br': "Darumacabeçada",
			'it-it': "Bottintesta Daruma"
		},

		damage: 130,

		effect: {
			'en-us': "If this Pokémon has any damage counters on it, this attack can be used for {W}.",
			'fr-fr': "Si au moins un marqueur de dégâts est placé sur ce Pokémon, cette attaque peut être utilisée pour {W}.",
			'de-de': "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, kann diese Attacke für {W} eingesetzt werden.",
			'es-es': "Si este Pokémon tiene algún contador de daño sobre él, este ataque se puede usar por 1 Energía {W}.",
			'pt-br': "Se este Pokémon tiver algum contador de dano nele, este ataque poderá ser usado por {W}.",
			'it-it': "Se questo Pokémon ha dei segnalini danno, il costo di questo attacco è {W}."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582206,
				tcgplayer: 253222
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582206,
				tcgplayer: 253222
			}
		},
	],
}

export default card
