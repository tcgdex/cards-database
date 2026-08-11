import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [494],
	set: Set,

	name: {
		'en-us': "Victini V",
		'fr-fr': "Victini V",
		'es-es': "Victini V",
		'it-it': "Victini V",
		'pt-br': "Victini V",
		'de-de': "Victini V"
	},

	illustrator: "Saki Hayashiro",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Fire"],

	attacks: [{
		name: {
			'en-us': "V Bullet",
			'fr-fr': "Projectile-V",
			'es-es': "Bala V",
			'it-it': "Dardo V",
			'pt-br': "Projétil V",
			'de-de': "V-Kugel"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Pokémon V, this attack does 50 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-V, cette attaque inflige 50 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon V, este ataque hace 50 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-V, questo attacco infligge 50 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon V, este ataque causará 50 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-V ist, fügt diese Attacke 50 Schadenspunkte mehr zu."
		},

		damage: "10+",
		cost: ["Fire"]
	}, {
		name: {
			'en-us': "Flare Shot",
			'fr-fr': "Tir Flambant",
			'es-es': "Disparo Llamarada",
			'it-it': "Colpofiammata",
			'pt-br': "Disparo de Labareda",
			'de-de': "Flackerschuss"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon.",
			'fr-fr': "Défaussez toute l'Énergie de ce Pokémon.",
			'es-es': "Descarta todas las Energías de este Pokémon.",
			'it-it': "Scarta tutte le Energie da questo Pokémon.",
			'pt-br': "Descarte todas as Energias deste Pokémon.",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
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


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 546176,
				tcgplayer: 234039
			}
		},
	],
}

export default card
