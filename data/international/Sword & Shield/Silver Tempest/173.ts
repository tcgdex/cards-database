import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [37],
	set: Set,

	name: {
		'en-us': "Alolan Vulpix V",
		'fr-fr': "Goupix d'Alola V",
		'es-es': "Vulpix de Alola V",
		'it-it': "Vulpix di Alola V",
		'pt-br': "Vulpix de Alola V",
		'de-de': "Alola Vulpix-V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'en-us': "White Drop",
			'fr-fr': "Chute Blanche",
			'es-es': "Gota Blanca",
			'it-it': "Biancaduta",
			'pt-br': "Queda Branca",
			'de-de': "Weißer Fall"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Pokémon V, this attack does 50 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-V, cette attaque inflige 50 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon V, este ataque hace 50 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-V, questo attacco infligge 50 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon V, este ataque causará 50 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-V ist, fügt diese Attacke 50 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Frost Smash",
			'fr-fr': "Impact Glacial",
			'es-es': "Golpe Gélido",
			'it-it': "Gelocolpo",
			'pt-br': "Pancada Congelada",
			'de-de': "Frostschlag"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682220,
				tcgplayer: 451821
			}
		},
	],
}

export default card
