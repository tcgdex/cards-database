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
            en: "If Cacturne is your Active Pokémon and is damaged by an opponent's attack <em>(even if Cacturne is Knocked Out)</em>, the Attacking Pokémon is now Poisoned.",
            ja: "Cacturneがアクティブなポケモンであり、対戦相手の攻撃<em>によって損傷を受けた場合（サボテンがノックアウトされたとしても）</em>、攻撃するポケモンが毒されます。",
            fr: "Si Cacurne est votre Pokémon actif et est endommagé par l'attaque d'un adversaire <em> (même si Cacurne est éliminée) </em>, le Pokémon attaquant est maintenant empoisonné.",
            de: "Wenn Kakturne Ihr aktives Pokémon ist und durch den Angriff eines Gegners (auch wenn Kakturne ausgeschlagen wird) </em> beschädigt wird, wird das angreifende Pokémon jetzt vergiftet.",
            es: "Si Cacturne es tu Pokémon activo y está dañado por el ataque de un oponente <em> (incluso si Cacturne es noqueado) </em>, el Pokémon atacante ahora está envenenado.",
            it: "Se Cacturne è il tuo Pokémon attivo ed è danneggiato dall'attacco di un avversario <em> (anche se Cacturne viene eliminato) </em>, il Pokémon attaccante è ora avvelenato.",
            pt: "Se Cacturne é o seu Pokémon ativo e for danificado pelo ataque de um oponente <em> (mesmo que Cacturne seja nocauteado) </em>, o Pokémon de ataque agora está envenenado.",
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
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
