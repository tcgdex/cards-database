import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [628],
	set: Set,

	name: {
		'en-us': "Hisuian Braviary",
		'fr-fr': "Gueriaigle de Hisui",
		'es-es': "Braviary de Hisui",
		'it-it': "Braviary di Hisui",
		'pt-br': "Braviary de Hisui",
		'de-de': "Hisui-Washakwil"
	},

	illustrator: "Jiro Sasumo",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Rufflet",
		'fr-fr': "Furaiglon",
		'es-es': "Rufflet",
		'it-it': "Rufflet",
		'pt-br': "Rufflet",
		'de-de': "Geronimatz"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Eerie Cry",
			'fr-fr': "Cri Inquiétant",
			'es-es': "Llanto Escalofriante",
			'it-it': "Grido Inquietante",
			'pt-br': "Brado Bizarro",
			'de-de': "Schauriger Schrei"
		},

		effect: {
			'en-us': "Put 3 damage counters on each of your opponent's Pokémon that has any damage counters on it.",
			'fr-fr': "Placez 3 marqueurs de dégâts sur chacun des Pokémon de votre adversaire ayant au moins un marqueur de dégâts.",
			'es-es': "Pon 3 contadores de daño en cada uno de los Pokémon de tu rival que tenga algún contador de daño sobre él.",
			'it-it': "Metti tre segnalini danno su ciascuno dei Pokémon del tuo avversario che ha dei segnalini danno.",
			'pt-br': "Coloque 3 contadores de dano em cada um dos Pokémon do seu oponente que tiver algum contador de dano nele.",
			'de-de': "Lege 3 Schadensmarken auf jedes Pokémon deines Gegners, auf dem mindestens 1 Schadensmarke liegt."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Mind Bend",
			'fr-fr': "Contrôleur d'Esprit",
			'es-es': "Fusión Mental",
			'it-it': "Fusione Mentale",
			'pt-br': "Dobra Mentes",
			'de-de': "Gedankenverbiegung"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Screaming a bloodcurdling battle cry, this huge and ferocious bird Pokémon goes out on the hunt. It blasts lakes with shock waves, then scoops up any prey that float to the water's surface.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682196,
				tcgplayer: 451798
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682196,
				tcgplayer: 451798
			}
		},
	],
}

export default card
