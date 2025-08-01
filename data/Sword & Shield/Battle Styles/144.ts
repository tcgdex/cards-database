import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [494],
	set: Set,

	name: {
		en: "Victini V",
		fr: "Victini V",
		es: "Victini V",
		it: "Victini V",
		pt: "Victini V",
		de: "Victini V"
	},

	illustrator: "Saki Hayashiro",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Fire"],

	attacks: [{
		name: {
			en: "V Bullet",
			fr: "Projectile-V",
			es: "Bala V",
			it: "Dardo V",
			pt: "Projétil V",
			de: "V-Kugel"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon V, this attack does 50 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-V, cette attaque inflige 50 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon V, este ataque hace 50 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-V, questo attacco infligge 50 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon V, este ataque causará 50 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-V ist, fügt diese Attacke 50 Schadenspunkte mehr zu."
		},

		damage: "10+",
		cost: ["Fire"]
	}, {
		name: {
			en: "Flare Shot",
			fr: "Tir Flambant",
			es: "Disparo Llamarada",
			it: "Colpofiammata",
			pt: "Disparo de Labareda",
			de: "Flackerschuss"
		},

		effect: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toute l'Énergie de ce Pokémon.",
			es: "Descarta todas las Energías de este Pokémon.",
			it: "Scarta tutte le Energie da questo Pokémon.",
			pt: "Descarte todas as Energias deste Pokémon.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 120,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",

	thirdParty: {
		cardmarket: 545011
	}
}

export default card
