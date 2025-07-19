import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Absol",
         ja: "絶対",
         fr: "Absolu",
         de: "Absol",
         es: "Absoluto",
         it: "ASSOLO",
         pt: "Abs",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [359],
      hp: 70,
      types: ["Darkness"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Shining Horn",
            ja: "輝くホーン",
            fr: "Corne brillante",
            de: "Leuchtendes Horn",
            es: "Bocina",
            it: "Corno splendente",
            pt: "Chifre brilhante",
          },
          effect: {
            en: "As long as Absol is the only PokÃ©mon you have in play, your opponent's Basic PokÃ©mon can't attack.",
            ja: "あなたがプレイしている唯一のポカモンである限り、あなたの相手の基本的なポカモンは攻撃できません。",
            fr: "Tant que l'absal est le seul poké que vous avez en jeu, le poké de base de votre adversaire ne peut pas attaquer.",
            de: "Solange Absol der einzige Poké Mon Mon ist, die Sie im Spiel haben, kann der grundlegende Poké Mons Ihres Gegners nicht angreifen.",
            es: "Mientras Absol sea el único Poké Mon que tienes en juego, el Poké básico de tu oponente no puede atacar.",
            it: "Finché Absol è l'unico poké mon che hai in gioco, il poké di base del tuo avversario non può attaccare.",
            pt: "Enquanto o Absol for o único Poké Mon que você tem em jogo, o Poké Mon do seu oponente não pode atacar.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Extra Call",
            ja: "余分な電話",
            fr: "Appel supplémentaire",
            de: "Zusätzlicher Anruf",
            es: "Llamada extra",
            it: "Chiamata extra",
            pt: "Chamada extra",
          },
          effect: {
            en: "Search your deck for a Pokemon-ex, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
            ja: "デッキを検索してポケモンエックスを検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre deck pour un Pokemon-Ex, montrez-le à votre adversaire et mettez-le dans votre main. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einem Pokemon-EX, zeigen Sie es Ihrem Gegner und geben Sie es in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo un Pokémon-Ex, muéstrelo a su oponente y póngalo en su mano. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo un Pokemon-Ex, mostralo al tuo avversario e mettilo in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho por um Pokemon-Ex, mostre-o ao seu oponente e coloque-o em sua mão. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Darkness", "Colorless"],
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
            en: "Choose 1 of your opponent's Pokemon. This attack does 20 damage to that Pokemon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokemon.",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに20のダメージを与えます。この攻撃の損傷は、脱力感、抵抗、ポケの提唱、ポケボディ、またはそのポケモンに対するその他の影響の影響を受けません。",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 20 dégâts à ce Pokémon. Les dommages de cette attaque ne sont pas affectés par la faiblesse, la résistance, les poké-powers, les poké-corps ou tout autre effet sur ce Pokémon.",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 20. Der Schaden dieses Angriffs ist nicht von Schwäche, Widerstand, Poké-Powers, Poké-Körpern oder anderen Auswirkungen auf dieses Pokémon beeinflusst.",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 20 daños a ese Pokémon. El daño de este ataque no está afectado por la debilidad, la resistencia, los poké-powers, los cuerpos de los poké o ningún otro efecto en ese Pokémon.",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco fa 20 danni a quel Pokemon. Il danno di questo attacco non è influenzato da debolezza, resistenza, Poké-Powers, Poké-Bodies o qualsiasi altro effetto su quel Pokemon.",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 20 danos a esse Pokémon. O dano desse ataque não é afetado pela fraqueza, resistência, poké-powers, corpos de Poké ou quaisquer outros efeitos sobre esse Pokémon.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
