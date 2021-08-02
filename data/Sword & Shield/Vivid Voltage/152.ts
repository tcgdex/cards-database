import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Hero’s Medal",
		fr: "Médaille du Héros",
		es: "Insignia de Héroes",
		it: "Medaglia dell’Eroe",
		pt: "Medalha do Herói",
		de: "Heldenmedaille"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "The Pokémon VMAX this card is attached to gets -100 HP, and if it is Knocked Out by damage from an attack from your opponent’s Pokémon, that player takes 1 fewer Prize card. You can’t attach this card to a Pokémon VMAX that has 100 HP or less remaining.",
		fr: "Le Pokémon-VMAX auquel cette carte est attachée perd 100 PV, et s’il est mis K.O. par les dégâts d’une attaque d’un Pokémon de votre adversaire, ce dernier récupère une carte Récompense de moins. Vous ne pouvez pas attacher cette carte à un Pokémon-VMAX auquel il reste 100 PV ou moins.",
		es: "El Pokémon VMAX al que está unida esta carta tiene 100 PS menos, y, si queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, ese jugador coge 1 carta de Premio menos. No puedes unir esta carta a un Pokémon VMAX al que le queden 100 PS o menos.",
		it: "Il Pokémon-VMAX a cui è assegnata questa carta ha 100 PS in meno e se viene messo KO dai danni di un attacco di un Pokémon del tuo avversario, quel giocatore prende una carta Premio in meno. Non puoi assegnare questa carta a un Pokémon-VMAX che ha 100 PS o meno rimanenti.",
		pt: "O Pokémon VMAX ao qual esta carta está ligada recebe 100 PS a menos e, se for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, aquele jogador pegará 1 carta de Prêmio a menos. Você não pode ligar esta carta a um Pokémon VMAX que tiver PS restante de 100 ou menos.",
		de: "Das Pokémon-VMAX, an das diese Karte angelegt ist, erhält -100 KP, und wenn es durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, nimmt jener Spieler 1 Preiskarte weniger. Du kannst diese Karte nicht an ein Pokémon-VMAX anlegen, das 100 oder weniger verbleibende KP hat."
	},

	trainerType: "Tool",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
