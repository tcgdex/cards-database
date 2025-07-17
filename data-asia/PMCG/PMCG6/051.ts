import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Sabrina's Hypno",
         ja: "サブリナの催眠",
         fr: "Hypno de Sabrina",
         de: "Sabrinas Hypno",
         es: "Hypno de Sabrina",
         it: "L'ipno di Sabrina",
         pt: "Hypno de Sabrina",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [97],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Invigorate",
            ja: "活気があります",
            fr: "Revigorer",
            de: "Beleben",
            es: "Vigorizar",
            it: "Rinvigorire",
            pt: "Revigorar",
          },
          effect: {
            en: "Choose 1 Basic Pokemon in any player's discard pile. Put it onto that player's Bench. Put a number of damage counters on that Pokemon equal to half its HP (rounded down to the nearest 10). (You can't put a Pokemon on a Bench that's full.)",
            ja: "任意のプレイヤーの破棄パイルで1つの基本的なポケモンを選択します。そのプレーヤーのベンチに置きます。そのポケモンの半分に等しいそのポケモンに多数のダメージカウンターを置きます（最も近い10に丸められます）。 （満杯のベンチにポケモンを置くことはできません。）",
            fr: "Choisissez 1 Pokémon de base dans la pile de défausse de tout joueur. Mettez-le sur le banc de ce joueur. Mettez un certain nombre de compteurs de dégâts sur ce Pokémon égal à la moitié de son HP (arrondi jusqu'au 10 le plus proche). (Vous ne pouvez pas mettre un pokemon sur un banc plein.)",
            de: "Wählen Sie 1 Basic -Pokémon in den Ablagerungen eines Spielers. Legen Sie es auf die Bank dieses Spielers. Legen Sie eine Reihe von Schadenszähnen auf dieses Pokemon auf die Hälfte seiner HP (abgerundet auf die nächsten 10). (Sie können kein Pokémon auf eine Bank setzen, die voll ist.)",
            es: "Elija 1 Pokémon básico en la pila de descarte de cualquier jugador. Póngalo en el banco de ese jugador. Ponga una serie de contadores de daño en ese Pokémon igual a la mitad de su HP (redondeado a los 10 más cercanos). (No puedes poner un Pokémon en un banco lleno).",
            it: "Scegli 1 Pokemon di base nella pila di scarto di qualsiasi giocatore. Mettilo sulla panchina di quel giocatore. Metti una serie di contatori di danno su quel Pokemon pari a metà HP (arrotondato al più vicino 10). (Non puoi mettere un Pokemon su una panchina piena.)",
            pt: "Escolha 1 Pokémon básico na pilha de descarte de qualquer jogador. Coloque -o no banco desse jogador. Coloque um número de contadores de dano naquele Pokemon igual a metade do seu HP (arredondado até o 10 mais próximo). (Você não pode colocar um Pokémon em um banco que está cheio.)",
          },
        },
        {
          cost: ["Psychic", "Psychic"],
          name: {
            en: "Pendulum Curse",
            ja: "振り子の呪い",
            fr: "Maudire pendule",
            de: "Pendelfluch",
            es: "Maldición del péndulo",
            it: "Pendulum Curse",
            pt: "Maldição do pêndulo",
          },
          effect: {
            en: "Flip a number of coins equal to the number of damage counters on the Defending Pokemon. This attack does 20 damage times the number of heads.",
            ja: "防御ポケモンのダメージカウンターの数に等しい多数のコインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            fr: "Retournez un certain nombre de pièces égales au nombre de compteurs de dégâts sur le Pokémon en défense. Cette attaque fait 20 dégâts de temps le nombre de têtes.",
            de: "Drehen Sie eine Reihe von Münzen um, die der Anzahl der Schadenszähler auf dem verteidigenden Pokémon entsprechen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe.",
            es: "Voltee una serie de monedas igual al número de contadores de daño en el Pokémon defensor. Este ataque hace 20 veces el número de cabezas.",
            it: "Capolare un numero di monete pari al numero di contatori di danno sul Pokemon in difesa. Questo attacco fa 20 danni il numero di teste.",
            pt: "Vire uma série de moedas iguais ao número de contadores de danos no Pokémon defensivo. Este ataque causa 20 danos vezes o número de cabeças.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
