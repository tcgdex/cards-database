import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Flygon",
		fr: "Libégon",
		es: "Flygon",
		it: "Flygon",
		pt: "Flygon",
		de: "Libelldra"
	},
	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		330,
	],
	hp: 140,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Vibrava",
		fr: "Vibraninf",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dragon Guard",
				fr: "Garde des Dragons",
				es: "Guardia Dragón",
				it: "Dragoguardia",
				pt: "Protetor de Dragões",
				de: "Drachenschutz"
			},
			effect: {
				en: "Prevent all effects of your opponent’s attacks, except damage, done to your Dragon Pokémon. (Existing effects are not removed.)",
				fr: "Évitez tous les effets des attaques de votre adversaire, à l’exception des dégâts, infligés à vos Pokémon Dragon. (Les effets déjà en action ne sont pas retirés.)",
				es: "Evita todos los efectos de los ataques de tu rival, excepto el daño, infligidos a tus Pokémon Dragon. (No se eliminan los efectos ya existentes).",
				it: "Previeni tutti gli effetti degli attacchi del tuo avversario, esclusi i danni, inflitti ai tuoi Pokémon Dragon. Gli effetti esistenti non vengono rimossi.",
				pt: "Previne todos os efeitos de ataques do seu oponente, exceto dano, causados aos seus Pokémon Dragon (efeitos existentes não são removidos).",
				de: "Verhindere alle Effekte von Attacken deines Gegners, außer Schaden, die deinen Dragon-Pokémon zugefügt werden. (Bestehende Effekte werden nicht entfernt.)"
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Sand Tomb",
				fr: "Tourbi-Sable",
				es: "Bucle Arena",
				it: "Sabbiotomba",
				pt: "Fosso de Areia",
				de: "Sandgrab"
			},
			effect: {
				en: "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
