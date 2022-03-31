import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Qwilfish",
		fr: "Qwilfish",
		es: "Qwilfish",
		it: "Qwilfish",
		pt: "Qwilfish",
		de: "Baldorfish"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		211,
	],
	hp: 80,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Counterattack Quills",
				fr: "Contre-Piquants",
				es: "Contraataque Púas",
				it: "Contrappunto",
				pt: "Penas de Contra-Ataque",
				de: "Konterstacheln"
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), put 2 damage counters on the Attacking Pokémon.",
				fr: "Si ce Pokémon est votre Pokémon Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même si ce Pokémon est mis K.O.), placez 2 marqueurs de dégâts sur le Pokémon Attaquant.",
				es: "Si este Pokémon es tu Pokémon Activo y resulta dañado por el ataque de un rival (incluso si este Pokémon queda Fuera de Combate), pon 2 contadores de daño en el Pokémon Atacante.",
				it: "Se questo Pokémon è il tuo Pokémon attivo e viene danneggiato da un attacco del tuo avversario, anche se viene messo KO, metti due segnalini danno sul Pokémon attaccante.",
				pt: "Se este Pokémon for seu Pokémon Ativo e ele for danificado pelo ataque de um oponente (mesmo se esse Pokémon for Nocauteado), coloque 2 contadores de danos no Pokémon Atacante.",
				de: "Wenn dieses Pokémon dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 2 Schadensmarken auf das Angreifende Pokémon."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Sting",
				fr: "Dard-Venin",
				es: "Picotazo Veneno",
				it: "Velenospina",
				pt: "Ferrão Venenoso",
				de: "Giftstachel"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
