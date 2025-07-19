import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Sableye",
         ja: "sableye",
         fr: "Sableye",
         de: "Sableye",
         es: "Sableye",
         it: "Sableye",
         pt: "Sableye",
      },


      category: "Pokemon",
      dexId: [302],
      hp: 60,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Synergy Effect",
            ja: "相乗効果",
            fr: "Effet de synergie",
            de: "Synergieeffekt",
            es: "Efecto sinergia",
            it: "Effetto sinergia",
            pt: "Efeito de sinergia",
          },
          effect: {
            en: "If Phoebe's Stadium is in play, prevent all damage done to Sableye by attacks from your opponent's PokÃ©mon-ex.",
            ja: "フィービーのスタジアムが機能している場合は、相手のPokã©Mon-Exからの攻撃によってSableyeに与えられたすべての損害を防ぎます。",
            fr: "Si le stade de Phoebe est en jeu, empêchez tous les dégâts causés à Sableye par les attaques de la poké de votre adversaire.",
            de: "Wenn Phoebes Stadion im Spiel ist, verhindern Sie alle Schäden an Sableye durch Angriffe aus dem Poké-Mon-EX Ihres Gegners.",
            es: "Si el estadio de Phoebe está en juego, evite todo el daño causado a Sableye por ataques del Poké de tu oponente.",
            it: "Se lo stadio di Phoebe è in gioco, impedisci tutti i danni fatti a Sableye dagli attacchi dal poké mon-ex del tuo avversario.",
            pt: "Se o estádio de Phoebe estiver em jogo, impeça todos os danos causados a Sableye por ataques do Poké Mon-Ex.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Down Draw",
            ja: "ダウンドロー",
            fr: "Tirage vers le bas",
            de: "Down Draw",
            es: "Dibujo hacia abajo",
            it: "Abbatti",
            pt: "Draw Down Draw",
          },
          effect: {
            en: "Draw 2 cards from the bottom of your deck.",
            ja: "デッキの底から2枚のカードを描きます。",
            fr: "Dessinez 2 cartes du bas de votre deck.",
            de: "Zeichnen Sie 2 Karten von unten Ihres Decks.",
            es: "Dibuja 2 cartas desde la parte inferior de tu mazo.",
            it: "Disegna 2 carte dal fondo del tuo mazzo.",
            pt: "Desenhe 2 cartas do fundo do seu baralho.",
          },
        },
        {
          cost: ["Psychic", "Colorless"],
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
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
