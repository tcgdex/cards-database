import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Honchkrow",
		fr: "Corboss",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		430,
	],
	hp: 90,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Murkrow",
		fr: "Cornèbre",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Darkness Restore",
				fr: "Restitution d'obscurité",
			},
			effect: {
				en: "Once during your turn (before your attack), if Honchkrow is your Active Pokémon and your opponent's Bench isn't full, you may use this power. Search your opponent's discard pile for a Basic Pokémon and put it onto his or her Bench. This power can't be used if Honchkrow is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Corboss est votre Pokémon Actif et que le Banc de votre adversaire n'est pas plein, vous pouvez utiliser ce pouvoir. Choisissez dans la pile de défausse de votre adversaire un Pokémon de base et placez-le sur son Banc. Ce pouvoir ne peut pas être utilisé si Corboss est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Riot",
				fr: "Émeute",
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Pokémon that isn't an Evolved Pokémon in play (both yours and your opponent's).",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Pokémon en jeu n'étant pas un Pokémon Évolué (les vôtres et ceux de votre adversaire).",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
