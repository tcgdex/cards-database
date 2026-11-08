import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Komala",
		'fr-fr': "Dodoala",
		'es-es': "Komala",
		'it-it': "Komala",
		'pt-br': "Komala",
		'de-de': "Koalelu"
	},
	illustrator: "nagimiso",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		775,
	],
	hp: 80,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Comatose",
				'fr-fr': "Hypersommeil",
				'es-es': "Letargo Perenne",
				'it-it': "Sonno Assoluto",
				'pt-br': "Comatoso",
				'de-de': "Dauerschlaf"
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, whenever you attach an Energy from your hand to it, it is now Asleep.",
				'fr-fr': "Tant que ce Pokémon est votre Pokémon Actif, lorsque vous lui attachez une Énergie de votre main, il est désormais Endormi.",
				'es-es': "Mientras este Pokémon sea tu Pokémon Activo, cada vez que le unas 1 Energía de tu mano, pasa a estar Dormido.",
				'it-it': "Fintanto che questo Pokémon è il tuo Pokémon attivo, ogni volta che gli assegni un’Energia dalla tua mano, questo Pokémon viene addormentato.",
				'pt-br': "Enquanto este Pokémon for o seu Pokémon Ativo, sempre que ligar 1 Energia da sua mão a ele, ele será Adormecido.",
				'de-de': "Jedes Mal, wenn du 1 Energie von deiner Hand an dieses Pokémon anlegst und solang es dein Aktives Pokémon ist, schläft es jetzt."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hypno Roll",
				'fr-fr': "Roulade Hypnotique",
				'es-es': "Vuelta Hipnótica",
				'it-it': "Rotolata Ipnotica",
				'pt-br': "Rolagem Hipnótica",
				'de-de': "Hypnorolle"
			},
			effect: {
				'en-us': "This attack can be used if this Pokémon is Asleep. If it is not Asleep, this attack does nothing.",
				'fr-fr': "Cette attaque peut être utilisée si ce Pokémon est Endormi. S’il n’est pas Endormi, cette attaque ne fait rien.",
				'es-es': "Este ataque se puede usar si este Pokémon está Dormido. Si no está Dormido, este ataque no hace nada.",
				'it-it': "Questo attacco può essere usato se questo Pokémon è addormentato. Se non lo è, questo attacco non ha effetto.",
				'pt-br': "Este ataque pode ser usado se este Pokémon estiver Adormecido. Se não estiver Adormecido, este ataque não fará nada.",
				'de-de': "Diese Attacke kann eingesetzt werden, wenn dieses Pokémon schläft. Wenn es nicht schläft, hat diese Attacke keine Auswirkungen."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,




	description: {
		'en-us': "It is born asleep, and it dies asleep. All its movements are apparently no more than the results of it tossing and turning in its dreams.",
	},
}

export default card
