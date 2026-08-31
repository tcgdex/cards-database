import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Banette-GX",
		fr: "Branette-GX",
		de: "Banette-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		354,
	],
	hp: 190,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Shuppet",
		fr: "Polichombr",
		de: "Shuppet"
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shady Move",
				fr: "Déplacement Louche",
				de: "Zwielichtige Aktion"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may move 1 damage counter from 1 Pokémon to another Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez déplacer un marqueur de dégâts d’un Pokémon vers un autre Pokémon.",
				de: "Einmal während deines Zuges (bevor du angreifst), wenn dieses Pokémon dein Aktives Pokémon ist, kannst du 1 Schadensmarke von 1 Pokémon auf 1 anderes Pokémon verschieben."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Shadow Chant",
				fr: "Chant d’Ombre",
				de: "Schattengesang"
			},
			effect: {
				en: "This attack does 10 more damage for each Supporter card in your discard pile. You can't add more than 100 damage in this way.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque carte Supporter dans votre pile de défausse. Vous ne pouvez pas ajouter plus de 100 dégâts de cette façon.",
				de: "Diese Attacke fügt 10 Schadenspunkte mehr mal der Anzahl der Unterstützerkarten in deinem Ablagestapel zu. Du kannst auf diese Weise höchstens 100 Schadenspunkte mehr zufügen."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Tomb Hunt-GX",
				fr: "Chasse Sépulcre-GX",
				de: "Grabjagd-GX"
			},
			effect: {
				en: "Put 3 cards from your discard pile into your hand. (You can't use more than 1 GX attack in a game.)",
				fr: "Prenez 3 cartes dans votre pile de défausse et ajoutez-les à votre main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				de: "Nimm 3 Karten aus deinem Ablagestapel auf deine Hand. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
