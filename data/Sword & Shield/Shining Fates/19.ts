import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Pyrobut VMAX",
		en: "Cinderace VMAX",
		es: "Cinderace VMAX",
		it: "Cinderace VMAX",
		pt: "Cinderace VMAX",
		de: "Liberlo VMAX"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],

	evolveFrom: {
		fr: "Pyrobut-V",
		en: "Cinderace V"
	},

	attacks: [{
		name: {
			fr: "Riposte",
			en: "Counter",
			es: "Contraataque",
			it: "Contrattacco",
			pt: "Contra-atacar",
			de: "Konter"
		},

		effect: {
			fr: "Si ce Pokémon a subi les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige en plus ce montant-là de dégâts.",
			en: "If this Pokémon was damaged by an attack during your opponent's last turn, this attack does that much more damage.",
			es: "Si este Pokémon resultó dañado por un ataque durante el último turno de tu rival, este ataque hace ese número de puntos de daño más.",
			it: "Se questo Pokémon è stato danneggiato da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge altrettanti danni in più.",
			pt: "Se este Pokémon tiver sido danificado por um ataque durante o último turno do seu oponente, este ataque causará a mesma quantidade de dano a mais.",
			de: "Wenn diesem Pokémon während des letzten Zuges deines Gegners durch eine Attacke Schaden zugefügt wurde, fügt diese Attacke genauso viel Schaden mehr zu."
		},

		damage: "30+",
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			fr: "Ballon Brûlomax",
			en: "Max Pyro Ball",
			es: "Maxibalón Ígneo",
			it: "Dynapalla Infuocata",
			pt: "Bola Incendiária Max",
			de: "Dyna-Feuerball"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			en: "Your opponent's Active Pokémon is now Burned.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
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

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "VMAX"
}

export default card
