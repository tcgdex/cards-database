import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Hisuian Samurott VSTAR",
		fr: "Clamiral de Hisui VSTAR",
		es: "Samurott de Hisui V-ASTRO",
		it: "Samurott di Hisui V ASTRO",
		pt: "Samurott de Hisui V-ASTRO",
		de: "Hisui-Admurai VSTAR"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],

	evolveFrom: {
		en: "Hisuian Samurott V",
		fr: "Clamiral de Hisui-V",
		es: "Samurott de Hisui V",
		it: "Samurott di Hisui-V",
		pt: "Samurott de Hisui V",
		de: "Hisui-Admurai-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Merciless Blade",
			fr: "Lame Implacable",
			es: "Filo Despiadado",
			it: "Lama Implacabile",
			pt: "Lâmina Impiedosa",
			de: "Erbarmungslose Klinge"
		},

		effect: {
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 110 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 110 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 110 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 110 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 110 pontos de dano a mais.",
			de: "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 110 Schadenspunkte mehr zu."
		},

		damage: "110+"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card