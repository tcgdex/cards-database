import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [815],
	set: Set,

	name: {
		'fr-fr': "Pyrobut VMAX",
		'en-us': "Cinderace VMAX",
		'es-es': "Cinderace VMAX",
		'it-it': "Cinderace VMAX",
		'pt-br': "Cinderace VMAX",
		'de-de': "Liberlo VMAX"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],

	evolveFrom: {
		'fr-fr': "Pyrobut-V",
		'en-us': "Cinderace V"
	},

	attacks: [{
		name: {
			'fr-fr': "Riposte",
			'en-us': "Counter",
			'es-es': "Contraataque",
			'it-it': "Contrattacco",
			'pt-br': "Contra-atacar",
			'de-de': "Konter"
		},

		effect: {
			'fr-fr': "Si ce Pokémon a subi les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige en plus ce montant-là de dégâts.",
			'en-us': "If this Pokémon was damaged by an attack during your opponent's last turn, this attack does that much more damage.",
			'es-es': "Si este Pokémon resultó dañado por un ataque durante el último turno de tu rival, este ataque hace ese número de puntos de daño más.",
			'it-it': "Se questo Pokémon è stato danneggiato da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge altrettanti danni in più.",
			'pt-br': "Se este Pokémon tiver sido danificado por um ataque durante o último turno do seu oponente, este ataque causará a mesma quantidade de dano a mais.",
			'de-de': "Wenn diesem Pokémon während des letzten Zuges deines Gegners durch eine Attacke Schaden zugefügt wurde, fügt diese Attacke genauso viel Schaden mehr zu."
		},

		damage: "30+",
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			'fr-fr': "Ballon Brûlomax",
			'en-us': "Max Pyro Ball",
			'es-es': "Maxibalón Ígneo",
			'it-it': "Dynapalla Infuocata",
			'pt-br': "Bola Incendiária Max",
			'de-de': "Dyna-Feuerball"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 170,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",


	stage: "VMAX",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539118,
				tcgplayer: 232407
			}
		},
	],
}

export default card
