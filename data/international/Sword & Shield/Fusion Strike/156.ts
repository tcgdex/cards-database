import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [94],
	set: Set,

	name: {
		'en-us': "Gengar V",
		'fr-fr': "Ectoplasma V",
		'es-es': "Gengar V",
		'it-it': "Gengar V",
		'pt-br': "Gengar V",
		'de-de': "Gengar V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "5ban Graphics",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Dark Slumber",
			'fr-fr': "Sommeil Obscur",
			'de-de': "Dunkler Schlummer",
			'es-es': "Letargo Oscuro",
			'pt-br': "Sono Sombrio",
			'it-it': "Sonno Oscuro"
		},

		damage: 40,

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato."
		}
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			'en-us': "Pain Explosion",
			'fr-fr': "Explosion de Douleur",
			'de-de': "Schmerzexplosion",
			'es-es': "Explosión de Dolor",
			'pt-br': "Explosão de Dor",
			'it-it': "Esplosione Infausta"
		},

		damage: 190,

		effect: {
			'en-us': "Put 3 damage counters on this Pokémon.",
			'fr-fr': "Placez 3 marqueurs de dégâts sur ce Pokémon.",
			'de-de': "Lege 3 Schadensmarken auf dieses Pokémon.",
			'es-es': "Pon 3 contadores de daño en este Pokémon.",
			'pt-br': "Coloque 3 contadores de dano neste Pokémon.",
			'it-it': "Metti tre segnalini danno su questo Pokémon."
		}
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582784,
				tcgplayer: 253370
			}
		},
	],
}

export default card
