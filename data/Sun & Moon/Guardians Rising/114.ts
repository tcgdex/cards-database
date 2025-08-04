import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Komala",
		fr: "Dodoala",
		es: "Komala",
		it: "Komala",
		pt: "Komala",
		de: "Koalelu"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
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
				en: "Comatose",
				fr: "Hypersommeil",
				es: "Letargo Perenne",
				it: "Sonno Assoluto",
				pt: "Comatoso",
				de: "Dauerschlaf"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, whenever you attach an Energy from your hand to it, it is now Asleep.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, lorsque vous lui attachez une Énergie de votre main, il est désormais Endormi.",
				es: "Mientras este Pokémon sea tu Pokémon Activo, cada vez que le unas 1 Energía de tu mano, pasa a estar Dormido.",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, ogni volta che gli assegni un’Energia dalla tua mano, questo Pokémon viene addormentato.",
				pt: "Enquanto este Pokémon for o seu Pokémon Ativo, sempre que ligar 1 Energia da sua mão a ele, ele será Adormecido.",
				de: "Jedes Mal, wenn du 1 Energie von deiner Hand an dieses Pokémon anlegst und solang es dein Aktives Pokémon ist, schläft es jetzt."
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
				en: "Hypno Roll",
				fr: "Roulade Hypnotique",
				es: "Vuelta Hipnótica",
				it: "Rotolata Ipnotica",
				pt: "Rolagem Hipnótica",
				de: "Hypnorolle"
			},
			effect: {
				en: "This attack can be used if this Pokémon is Asleep. If it is not Asleep, this attack does nothing.",
				fr: "Cette attaque peut être utilisée si ce Pokémon est Endormi. S’il n’est pas Endormi, cette attaque ne fait rien.",
				es: "Este ataque se puede usar si este Pokémon está Dormido. Si no está Dormido, este ataque no hace nada.",
				it: "Questo attacco può essere usato se questo Pokémon è addormentato. Se non lo è, questo attacco non ha effetto.",
				pt: "Este ataque pode ser usado se este Pokémon estiver Adormecido. Se não estiver Adormecido, este ataque não fará nada.",
				de: "Diese Attacke kann eingesetzt werden, wenn dieses Pokémon schläft. Wenn es nicht schläft, hat diese Attacke keine Auswirkungen."
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

	thirdParty: {
		cardmarket: 297566,
		tcgplayer: 131032
	}
}

export default card
