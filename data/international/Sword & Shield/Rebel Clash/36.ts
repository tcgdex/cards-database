import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Cinderace VMAX",
		'fr-fr': "Pyrobut VMAX",
		'es-es': "Cinderace VMAX",
		'it-it': "Cinderace VMAX",
		'pt-br': "Cinderace VMAX",
		'de-de': "Liberlo VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	dexId: [815],
	set: Set,
	hp: 320,

	evolveFrom: {
		'en-us': "Cinderace V",
		'fr-fr': "Pyrobut-V",
		'es-es': "Cinderace V",
		'it-it': "Cinderace-V",
		'pt-br': "Cinderace V",
		'de-de': "Liberlo-V"
	},

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Counter",
				'fr-fr': "Riposte",
				'es-es': "Contraataque",
				'it-it': "Contrattacco",
				'pt-br': "Contra-atacar",
				'de-de': "Konter"
			},
			effect: {
				'en-us': "If this Pokémon was damaged by an attack during your opponent's last turn, this attack does that much more damage.",
				'fr-fr': "Si ce Pokémon a subi les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige en plus ce montant-là de dégâts.",
				'es-es': "Si este Pokémon resultó dañado por un ataque durante el último turno de tu rival, este ataque hace ese número de puntos de daño más.",
				'it-it': "Se questo Pokémon è stato danneggiato da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge altrettanti danni in più.",
				'pt-br': "Se este Pokémon tiver sido danificado por um ataque durante o último turno do seu oponente, este ataque causará a mesma quantidade de dano a mais.",
				'de-de': "Wenn diesem Pokémon während des letzten Zuges deines Gegners durch eine Attacke Schaden zugefügt wurde, fügt diese Attacke genauso viel Schaden mehr zu."
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
				'en-us': "Max Pyro Ball",
				'fr-fr': "Ballon Brûlomax",
				'es-es': "Maxibalón Ígneo",
				'it-it': "Dynapalla Infuocata",
				'pt-br': "Bola Incendiária Max",
				'de-de': "Dyna-Feuerball"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
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


	stage: "VMAX",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 456423,
				tcgplayer: 213113
			}
		},
	],
}

export default card
