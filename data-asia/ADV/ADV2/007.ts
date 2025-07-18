import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Cacturne",
         ja: "サボテン",
         fr: "Cacurne",
         de: "Kakturne",
         es: "Cacturne",
         it: "Cacturne",
         pt: "Cacturne",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [332],
      hp: 80,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Poison Payback",
            ja: "ポイズンの見返り",
            fr: "Retour sur poison",
            de: "Giftrückzahlung",
            es: "Reverencia de veneno",
            it: "Rimborso veleno",
            pt: "Payback de veneno",
          },
          effect: {
            en: "If Cacturne is your Active PokÃ©mon and is damaged by an opponent's attack (even if Cacturne is Knocked Out), the Attacking PokÃ©mon is now Poisoned.",
            ja: "Cacturneがアクティブなポカモンであり、対戦相手の攻撃によって損傷を受けている場合（サボテンがノックアウトされたとしても）、攻撃するポカモンは現在毒されます。",
            fr: "Si Cacurne est votre poké actif et est endommagé par l'attaque d'un adversaire (même si Cacurne est éliminée), le poké attaquant est maintenant empoisonné.",
            de: "Wenn Kakturne Ihr aktiver Poké Mon Mon ist und durch den Angriff eines Gegners beschädigt wird (auch wenn Kakturne ausgeschlagen wird), wird der angreifende Poké Mon Montag vergiftet.",
            es: "Si Cacturne es tu Poké Mon activo y está dañado por el ataque de un oponente (incluso si Cacturne es noqueado), el Poké Mon atacante ahora está envenenado.",
            it: "Se CacTurne è il tuo poké attivo e è danneggiato dall'attacco di un avversario (anche se Cacturne viene eliminato), il poké -luneding attaccante è ora avvelenato.",
            pt: "Se o cacturne é o seu Poké de Mon ativo e for danificado pelo ataque de um oponente (mesmo que o cacturne seja nocauteado), o Poké -Mon atacante está agora envenenado.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Feint Attack",
            ja: "FEINT攻撃",
            fr: "Attaque feinte",
            de: "Scheinangriff",
            es: "Ataques finos",
            it: "Attacco di finta",
            pt: "Ataque de finse",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 40 damage to that Pokemon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies or any other effects on that Pokemon.",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに40のダメージを与えます。この攻撃の損傷は、脱力感、抵抗、ポケの提唱、ポケボディ、またはそのポケモンへのその他の影響の影響を受けません。",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 40 dégâts à ce Pokémon. Les dommages de cette attaque ne sont pas affectés par la faiblesse, la résistance, les poké-powers, les poké-corps ou tout autre effet sur ce Pokémon.",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 40. Der Schaden dieses Angriffs ist nicht von Schwäche, Widerstand, Poké-Pächtern, Poké-Körpern oder anderen Auswirkungen auf dieses Pokémon beeinflusst.",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 40 daños a ese Pokémon. El daño de este ataque no está afectado por la debilidad, la resistencia, los poké-powers, los cuerpos de los poké o ningún otro efecto en ese Pokémon.",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco infligge 40 danni a quel Pokemon. Il danno di questo attacco non è influenzato da debolezza, resistenza, Poké-Powers, bodie di Poké o altri effetti su quel Pokemon.",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 40 danos a esse Pokémon. O dano desse ataque não é afetado pela fraqueza, resistência, poké-powers, corpos de poké ou outros efeitos nesse Pokémon.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
