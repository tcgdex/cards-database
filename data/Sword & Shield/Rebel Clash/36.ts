import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Cinderace VMAX",
		fr: "Pyrobut VMAX",
		es: "Cinderace VMAX",
		it: "Cinderace VMAX",
		pt: "Cinderace VMAX",
		de: "Liberlo VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	dexId: [815],
	set: Set,
	hp: 320,

	evolveFrom: {
		en: "Cinderace V",
		fr: "Pyrobut-V",
		es: "Cinderace V",
		it: "Cinderace-V",
		pt: "Cinderace V",
		de: "Liberlo-V"
	},

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Counter",
				fr: "Riposte",
				es: "Contraataque",
				it: "Contrattacco",
				pt: "Contra-atacar",
				de: "Konter"
			},
			effect: {
				en: "If this Pokémon was damaged by an attack during your opponent's last turn, this attack does that much more damage.",
				fr: "Si ce Pokémon a subi les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige en plus ce montant-là de dégâts.",
				es: "Si este Pokémon resultó dañado por un ataque durante el último turno de tu rival, este ataque hace ese número de puntos de daño más.",
				it: "Se questo Pokémon è stato danneggiato da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge altrettanti danni in più.",
				pt: "Se este Pokémon tiver sido danificado por um ataque durante o último turno do seu oponente, este ataque causará a mesma quantidade de dano a mais.",
				de: "Wenn diesem Pokémon während des letzten Zuges deines Gegners durch eine Attacke Schaden zugefügt wurde, fügt diese Attacke genauso viel Schaden mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Max Pyro Ball",
				fr: "Ballon Brûlomax",
				es: "Maxibalón Ígneo",
				it: "Dynapalla Infuocata",
				pt: "Bola Incendiária Max",
				de: "Dyna-Feuerball"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Burned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
				it: "Il Pokémon attivo del tuo avversario viene bruciato.",
				pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 170,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	types: ["Fire"],
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "VMAX",

}

export default card
