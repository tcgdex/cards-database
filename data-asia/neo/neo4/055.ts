import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Haunter",
         ja: "暗いハンター",
         fr: "Haunter foncé",
         de: "Dunkler Haunter",
         es: "Carpeta oscura",
         it: "Haunter oscuro",
         pt: "Assombro escuro",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [93],
      hp: 50,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Call Back",
            ja: "折り返し電話",
            fr: "Rappeler",
            de: "Rufen Sie zurück",
            es: "Llamar de vuelta",
            it: "Richiamare",
            pt: "Ligar de volta",
          },
          effect: {
            en: "Put a Baby Pokemon or Basic Pokemon card from your opponent's discard pile onto his or her Bench. Put 1 damage counter on that Pokemon. (You can't use this attack if your opponent's Bench is full.)",
            ja: "ベビーポケモンまたは基本的なポケモンカードを、相手の捨てられた山からベンチに置きます。そのポケモンに1つのダメージカウンターを置きます。 （対戦相手のベンチがいっぱいになった場合、この攻撃を使用できません。）",
            fr: "Mettez un bébé Pokémon ou une carte Pokémon de base de la tas de défausse de votre adversaire sur son banc. Mettez 1 compteur de dégâts sur ce Pokémon. (Vous ne pouvez pas utiliser cette attaque si le banc de votre adversaire est plein.)",
            de: "Setzen Sie ein Baby -Pokemon oder eine einfache Pokemon -Karte aus dem Ablagerungsstapel Ihres Gegners auf die Bank. Legen Sie dieses Pokémon 1 Schadenschalter. (Sie können diesen Angriff nicht verwenden, wenn die Bank Ihres Gegners voll ist.)",
            es: "Coloque un Pokémon Baby o una carta básica de Pokémon de la pila de descarte de tu oponente en su banco. Pon 1 contador de daño en ese Pokémon. (No puedes usar este ataque si el banco de tu oponente está lleno).",
            it: "Metti un pokemon per bambini o una carta Pokemon di base dalla pila di scarto del tuo avversario sulla sua panchina. Metti 1 contatore di danni su quel Pokemon. (Non puoi usare questo attacco se la panchina del tuo avversario è piena.)",
            pt: "Coloque um Pokémon de bebê ou um cartão Pokemon básico da pilha de descarte do seu oponente em seu banco. Coloque 1 contador de danos naquele Pokémon. (Você não pode usar esse ataque se o banco do seu oponente estiver cheio.)",
          },
        },
        {
          cost: ["Psychic", "Psychic"],
          name: {
            en: "Surround",
            ja: "囲む",
            fr: "Entourer",
            de: "Umgeben",
            es: "Rodear",
            it: "Circondarsi",
            pt: "Cercada",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Asleep. If tails, the Defending Pokemon can't retreat during your opponent's next turn.",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンは今眠っています。テールの場合、防衛ポケモンは相手の次のターン中に退却することはできません。",
            fr: "Retourner une pièce. Si la tête, le Pokémon en défense est maintenant endormi. Si Tails, le Pokémon en défense ne peut pas se retirer pendant le prochain virage de votre adversaire.",
            de: "Eine Münze drehen. Wenn Köpfe, schläft das verteidigende Pokemon jetzt. Wenn Schwänze, kann sich das verteidigende Pokémon während der nächsten Runde Ihres Gegners nicht zurückziehen.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está dormido. Si Tails, el Pokémon defensor no puede retirarse durante el próximo turno de tu oponente.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora addormentato. Se coda, il Pokemon in carica non può ritirarsi durante il prossimo turno del tuo avversario.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está dormindo. Se as caudas, o Pokémon atual não pode recuar durante o próximo turno do seu oponente.",
          },
          damage: 20,
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
