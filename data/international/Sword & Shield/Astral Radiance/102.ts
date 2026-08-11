import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [503],
	set: Set,

	name: {
		'en-us': "Hisuian Samurott VSTAR",
		'fr-fr': "Clamiral de Hisui VSTAR",
		'es-es': "Samurott de Hisui V-ASTRO",
		'it-it': "Samurott di Hisui V ASTRO",
		'pt-br': "Samurott de Hisui V-ASTRO",
		'de-de': "Hisui-Admurai VSTAR"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare VSTAR",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Hisuian Samurott V",
		'fr-fr': "Clamiral de Hisui-V",
		'es-es': "Samurott de Hisui V",
		'it-it': "Samurott di Hisui-V",
		'pt-br': "Samurott de Hisui V",
		'de-de': "Hisui-Admurai-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Merciless Blade",
			'fr-fr': "Lame Implacable",
			'es-es': "Filo Despiadado",
			'it-it': "Lama Implacabile",
			'pt-br': "Lâmina Impiedosa",
			'de-de': "Erbarmungslose Klinge"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon already has any damage counters on it, this attack does 110 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 110 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 110 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 110 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 110 pontos de dano a mais.",
			'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 110 Schadenspunkte mehr zu."
		},

		damage: "110+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658762,
				tcgplayer: 272303
			}
		},
	],
}

export default card
